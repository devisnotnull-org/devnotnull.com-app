#!/bin/sh

yarn build

ID=$(docker build -q .)

echo the id $ID

docker tag $ID alexbrown201/fandanzle-v2-api:latest
docker tag $ID alexbrown201/fandanzle-v2-api:stable

docker push alexbrown201/fandanzle-v2-api:latest
docker push alexbrown201/fandanzle-v2-api:stable
