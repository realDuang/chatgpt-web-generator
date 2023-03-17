FROM node:18
LABEL MAINTAINER="duang"

WORKDIR /workdir

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build

COPY /.env.local /workdir/
COPY /dist/ /workdir/
