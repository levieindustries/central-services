FROM node:9.11.1-alpine

ENV \
  CONTAINERPILOT_VERSION='3.6.0' \
  CONTAINERPILOT='/code/etc/containerpilot.json5.gotmpl'

RUN \
  apk --no-cache add curl g++ libc6-compat make nginx python && \
  mkdir -p /run/nginx && \
  CONTAINERPILOT_VERSION='3.7.0' && \
  curl -fLsS https://github.com/joyent/containerpilot/releases/download/$CONTAINERPILOT_VERSION/containerpilot-$CONTAINERPILOT_VERSION.tar.gz | \
  tar xz -C /usr/local/bin

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install --no-save

COPY .eslintrc ./
COPY bin/build.sh bin/
COPY etc/cogs.js etc/
COPY src .

ENV \
  URL='http://central-services.local' \
  CONSUL_SERVICE_NAME='central-services' \
  CONSUL_SERVICE_TAGS='consul-lb.url=central-services.local' \
  CONSUL_URL='consul:8500'

RUN bin/build.sh

COPY bin .
COPY etc .

EXPOSE 80

CMD ["containerpilot"]
