#!/bin/bash

set -e

npm i -g rimraf cross-env
npm run build
npm link
