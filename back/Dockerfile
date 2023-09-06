# syntax=docker/dockerfile:1

FROM node:18.13.0
WORKDIR /usr/src/app

RUN yarn global add typescript
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build
EXPOSE 8000
CMD ["yarn", "start"]
