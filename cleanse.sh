#!/bin/sh

git filter-branch --tree-filter "rm -rf .serverless" --prune-empty HEAD
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
echo .serverless/ >> .gitignore
git add .gitignore
git commit -m 'Removing .serverless from git history'
git gc
