# build state for building frontend assets

FROM node:alpine AS builder

WORKDIR /app

ENV MARKETING_BASE_URL http://localhost:18081
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

#docker build -t yinglu91/mfe-container:1.0 -f Dockerfile .
#docker images
#docker run -e "MARKETING_BASE_URL=http://localhost:18081" -p 18080:80 -d yinglu91/mfe-container:1.0
#docker ps
#chrome localhost:18080

#docker stop a07055e41522     ----- stop container
#docker image rm -f b07055e41502  --- rm image

