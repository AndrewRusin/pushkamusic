FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
