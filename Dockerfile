FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build && npm prune --production

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]