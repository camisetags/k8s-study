FROM node:12.7.0-alpine

EXPOSE 4000

RUN apk update
RUN apk add build-base postgresql-client

RUN mkdir -p /usr/src/app/
COPY . /usr/src/app/
WORKDIR /usr/src/app/

RUN chmod +x entrypoint.sh

RUN npm install


CMD ["./entrypoint.sh"]
