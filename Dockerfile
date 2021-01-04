FROM node:12-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production
# If you are building your code for production
RUN npm install pm2 -g
COPY ./dist .
EXPOSE 8080

CMD ["pm2-runtime","./dist/index.js"]