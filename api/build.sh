#!/bin/sh

yarn build

ID=$(docker build -q .)

echo the id $ID

docker tag $ID alexbrown201/fandanzle-v2-api:latest
docker tag $ID alexbrown201/fandanzle-v2-api:stable

docker push alexbrown201/fandanzle-v2-api:latest
docker push alexbrown201/fandanzle-v2-api:stable

helm repo add devnotnull https://devnotnull-helm.s3.eu-west-2.amazonaws.com

helm uninstall fandanzle-v2-api

helm install fandanzle-v2-api devnotnull/nodejs-template \
--set image.repository=alexbrown201/fandanzle-v2-api:latest \
--set port=3005 \
--set service.type=LoadBalancer \
--set service.loadBalancerIP=10.150.10.143 \
--set image.pullPolicy=Always