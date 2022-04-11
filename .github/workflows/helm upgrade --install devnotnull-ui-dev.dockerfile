helm upgrade --install devnotnull-ui-devnotnull-ui-github-actions-setup-main devnotnull/nodejs \
-f ./helm/values-development.yaml \
--set env.NODE_RUNTIME_ENV=development \
--set env.CDN_BUCKET=github-actions-setup-main \
--version 1 \
--set image.repository=alexbrown201/devnotnull-ui:github-actions-setup-main \
--set port=3000 \
--set service.type=LoadBalancer \
--set image.pullPolicy=Always