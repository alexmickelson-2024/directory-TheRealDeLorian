FROM node:latest as build
 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD npm run build && npm run start
 
# FROM nginx

# COPY default.conf /etc/nginx/conf.d/default.conf
 
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]