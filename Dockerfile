FROM node:12-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install pm2 -g
COPY ./dist .
EXPOSE 8080
CMD ["pm2-runtime","index.js"]