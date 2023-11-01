#!/bin/sh

yarn build:prod

ID=$(docker build -q .)

echo the id $ID

docker tag $ID alexbrown201/devnotnull-ui:latest
docker tag $ID alexbrown201/devnotnull-ui:2.0

docker push alexbrown201/devnotnull-ui:latest
docker push alexbrown201/devnotnull-ui:2.0

aws s3 cp ./build s3://devnotnull-ui-production --recursive

aws s3api put-bucket-cors --bucket devnotnull-ui-production --cors-configuration '{"CORSRules" : [{"AllowedHeaders":["*"],"AllowedMethods":["GET","HEAD", "POST"],"AllowedOrigins":["*"],"ExposeHeaders":[]}]}'

aws s3api put-bucket-policy --bucket devnotnull-ui-production --policy '{"Version": "2008-10-17", "Statement": [{ "Sid": "AllowPublicRead", "Effect": "Allow", "Principal": { "AWS": "*" }, "Action": ["s3:GetObject"], "Resource": ["arn:aws:s3:::devnotnull-ui-production/*" ] }] }'

helm repo add devnotnull https://devnotnull-helm.s3.eu-west-2.amazonaws.com

helm uninstall devnotnull-ui

helm install \
    --version 2 \
    --set env.NODE_RUNTIME_ENV=production \
    --set env.CDN_BUCKET=production \
    --set image.repository=alexbrown201/devnotnull-ui:latest \
    --set port=3000 \
    --set service.type=LoadBalancer \
    --set service.loadBalancerIP=10.150.10.134 \
    --set ingress.tls.secretName=devnotnull.com-production \
    --set ingress.annotations."kubernetes\.io/ingress\.class"=traefik \
    --set image.pullPolicy=Always \
    --set replicaCount=10 \
    --set "ingress.hosts[0].host"=devnotnull.com \
    --set "ingress.hosts[0].paths[0].path"=/ \
    devnotnull-ui \
    devnotnull/nodejs