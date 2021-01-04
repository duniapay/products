# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

ENV ENV_NAME dev

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
COPY tsconfig.json ./

# check files list
RUN ls -a
# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install --production

RUN npm fund

# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript
RUN npm run build

# Start
CMD [ "npm", "start" ]

EXPOSE 8080

