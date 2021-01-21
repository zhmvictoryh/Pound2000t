FROM node:10
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json package.json 
RUN yarn install 
COPY . . 