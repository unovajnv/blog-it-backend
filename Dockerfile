
FROM node:14

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4444

CMD [ "npm", "start" ]
