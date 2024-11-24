# Node Block
FROM node:20-alpine as nodework

ARG BUILD_ENV=dev
ARG API_BASE_URL="https://api.unitconverter.co.in"
ARG PUBLIC_URL="/"

RUN echo ${BUILD_ENV}
RUN echo ${API_BASE_URL}

RUN mkdir -p /usr/app/
WORKDIR /usr/app

ENV NEXT_PUBLIC_BASE_URL=${API_BASE_URL}
RUN echo "NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}"

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

ENV NODE_ENV production

CMD ["yarn", "start"]
