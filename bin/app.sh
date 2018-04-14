#!/bin/sh -e

if [ "$WATCH" = "1" ]; then
  node_modules/.bin/watchy \
    -w 'dist/**/*' \
    -- node dist
else
  node dist
fi
