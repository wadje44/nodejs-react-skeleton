FROM node:alpine

WORKDIR /src

COPY files/src/package*.json /src/

RUN yarn install && \
    yarn cache clean

COPY files/ /

EXPOSE 3000

ENV NODE_ENV=production

ENTRYPOINT [ "yarn" ]

CMD ["run", "start"]
