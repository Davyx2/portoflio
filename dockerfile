FROM node:10-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN npm install

COPY . .

RUN npm build

VOLUME [ "/home/node/app/public/images" ]

EXPOSE 3000

CMD ["npm", "start"]