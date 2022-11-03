FROM node:19-alpine

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

ENV PORT=5000

EXPOSE 8080

CMD ["npm", "start"]