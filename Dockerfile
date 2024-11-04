FROM node:latest as build
 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
ENV HOSTNAME="0.0.0.0"
CMD npm run build && npm run start