# Base image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

# docker build -t my-node-app:v1 .
# docker run -p 3000:3000 my-node-app:v1