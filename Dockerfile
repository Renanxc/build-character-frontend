FROM node:lts-alpine

WORKDIR /web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8091

CMD ["npm","run","dev"]