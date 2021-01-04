FROM node:12-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
# If you are building your code for production
RUN npm ci --only=production

RUN npm install pm2 -g
COPY ./dist .
EXPOSE 8080
CMD ["pm2-runtime","index.js"]