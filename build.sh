#!/bin/bash

set -e

npm install
npm i -g rimraf cross-env
npm run build
npm link
