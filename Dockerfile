FROM node:16-alpine3.13

COPY . /src/app

WORKDIR /src/app
RUN set -ex \
 && npm ci --only=production

WORKDIR /src/app/postgres-database
RUN set -ex \
 && npm install --only=production

WORKDIR /src/app/backend
RUN set -ex \
 && npm install --only=production

CMD ["node", "--experimental-specifier-resolution=node", "src/main.js"]