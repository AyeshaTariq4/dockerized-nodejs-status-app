FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV APP_MESSAGE="Hello from Docker Environment Variable 🚀"

CMD ["npm", "start"]
