# build state for building frontend assets

FROM node:alpine AS builder

WORKDIR /app

#COPY package.json ./

COPY ./ ./
RUN npm install
#COPY ./ ./

RUN npm run build


# nginx state for serving content

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

#docker build -t yinglu91/mfe-marketing:1.0 -f Dockerfile .
#docker images
#docker run -p 18081:80 -d yinglu91/mfe-marketing:1.0
#docker ps
#chrome http://localhost:18081/remoteEntry.js

#http://localhost:18080/undefined/remoteEntry.js ????