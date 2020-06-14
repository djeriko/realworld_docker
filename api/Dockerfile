# Use that docker image as source
FROM node:13.12.0-alpine

# Create dir inside docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to docker container root directory
COPY package*.json ./

# Run script to get node_modules inside docker container
RUN npm install

# Copy all file to docker container (without files in .dockerignore)
COPY . . 
