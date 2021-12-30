#!/bin/sh

yarn build:prod:pure

ID=$(docker build -q .)

echo the id $ID

docker tag $ID alexbrown201/fandanzle-v2:3.0
docker tag $ID alexbrown201/fandanzle-v2:stable

docker push alexbrown201/fandanzle-v2:3.0
docker push alexbrown201/fandanzle-v2:stable

serverless deploy --verbose --stage development
serverless deploy --verbose --stage production