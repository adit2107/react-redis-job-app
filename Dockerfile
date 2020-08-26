FROM node:14.8.0 AS frontend-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:14.8.0 AS backend-build
WORKDIR /home/app
COPY --from=frontend-build /usr/src/app/client/build ./client/build
COPY package*.json ./server/
RUN cd server && npm install
COPY server/ ./server/

EXPOSE 3081

CMD ["node", "server/index.js"]
