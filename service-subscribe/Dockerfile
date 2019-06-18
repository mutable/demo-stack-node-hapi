FROM node:8.8.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV NODE_ENV production
RUN rm -rf ./node_modules; npm install
ENTRYPOINT ["npm", "run"]
CMD ["start"]
