FROM node:latest as build
 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV POSTGRES_HOST = localhost
ENV POSTGRES_USER = test-user
ENV POSTGRES_PASSWORD = test-password
ENV POSTGRES_DB = db
RUN npm run build
 
FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf
 
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]