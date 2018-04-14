#!/bin/sh -e

bin/build.sh \
  -w 'src/**/*' \
  -w dist/index.css \
  -w dist/manifest.json \
  -w etc/nginx.conf
