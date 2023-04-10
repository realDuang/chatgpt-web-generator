FROM node:18.15.0-alpine3.14
LABEL MAINTAINER="duang"

WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
