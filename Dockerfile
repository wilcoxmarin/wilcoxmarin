FROM node:18.12.1-alpine3.16 as develop
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli
RUN npm i
COPY . .

