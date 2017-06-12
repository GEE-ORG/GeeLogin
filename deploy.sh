#!/usr/bin/env bash

cd ./frontend/
yarn run build
cd ..
git add .
git commit -m $1
git push -u origin master
git push -u bitbucket master