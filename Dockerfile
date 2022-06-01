FROM node:14-slim AS build
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:1.22.0
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/kokbok /usr/share/nginx/html
