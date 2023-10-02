FROM node:20
ENV NODE_ENV production
WORKDIR /opt/bond-together
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]
