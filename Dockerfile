FROM node:12-alpine
WORKDIR /app
RUN npm i -S koa
COPY app.js app.js
CMD ["node", "app.js"]
