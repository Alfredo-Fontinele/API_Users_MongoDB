FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]