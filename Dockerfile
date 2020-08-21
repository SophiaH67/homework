FROM node:14.5.0-stretch

WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]