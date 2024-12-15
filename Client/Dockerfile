FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

# Set environment variable for React build
ENV REACT_APP_API_URL=http://localhost:8082

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY server.js .
COPY package*.json ./

RUN npm install

EXPOSE 3000

ENV REACT_APP_API_URL=http://localhost:8082
ENV PORT=3000

CMD ["node", "server.js"]