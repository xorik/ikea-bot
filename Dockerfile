FROM node:14-alpine as build

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM node:14-alpine
COPY ./package* /app/
WORKDIR /app
RUN npm install --only=prod
COPY --from=build /app/dist /app/dist
ENTRYPOINT npm run start

