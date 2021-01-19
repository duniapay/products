#  we tell Docker to use an official Node.js image that's well supported
# We specify the 12.13 version of Node and choose an Alpine image. Alpine images are lighter
FROM node:12.13-alpine

# define the default value for NODE_ENV
# we use the ENV statement to set it to either the default value
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# each command Docker executes (defined in the RUN statement) will be executed in the specified context.
WORKDIR /usr/src/app

# we copy package.json and package-lock.json
COPY package*.json ./

# we install only dependencies defined in dependencies in package.json by using the --only=production argument
RUN npm install --only=production

# copy the rest of our application’s files into the Docker container
COPY . .

# set 3000 as port 
ENV PORT=8080

# Expose API port
EXPOSE 8080

# Run the web service on container startup
CMD ["node", "dist/src/main"]
