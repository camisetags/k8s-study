FROM node:12.7.0-alpine

EXPOSE 4000

RUN mkdir -p /usr/src/app/
COPY . /usr/src/app/
WORKDIR /usr/src/app/

RUN npm install

CMD ["node", "src/index.js"]
