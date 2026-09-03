# ///////////////////////////////////////////////////////////////// #
# build the angular application
FROM node:26-slim AS build
WORKDIR /usr/tmp
COPY . .
RUN node --version
RUN npm version
RUN npm install
RUN npx --version
RUN npm run build

# ///////////////////////////////////////////////////////////////// #
# deploy built to nginx
FROM nginx:stable-alpine-slim
USER root:root
EXPOSE 80/tcp
COPY --from=build /usr/tmp/dist /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/configs
COPY ./.docker/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
