#!/bin/sh

yarn build:prod:pure

serverless deploy --verbose --stage development
serverless deploy --verbose --stage production

ID=$(docker build -q .)

echo the id $ID

docker tag $ID alexbrown201/fandanzle-v2-ui:latest
docker tag $ID alexbrown201/fandanzle-v2-ui:2.0

docker push alexbrown201/fandanzle-v2-ui:latest
docker push alexbrown201/fandanzle-v2-ui:2.0

helm repo add devnotnull https://devnotnull-helm.s3.eu-west-2.amazonaws.com

helm uninstall fandanzle-v2-ui

helm install fandanzle-v2-ui devnotnull/nodejs-template \
--set image.repository=alexbrown201/fandanzle-v2-ui:latest \
--set port=3000 \
--set service.type=LoadBalancer \
--set service.loadBalancerIP=10.150.10.134 \
--set image.pullPolicy=Always