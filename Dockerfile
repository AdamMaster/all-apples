FROM node:18-alpine AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci && npm cache clean --force

FROM node:18-alpine AS build

WORKDIR /app

COPY --from=dependencies /app/node_modules /app/node_modules
COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY --from=build /app /app

RUN npm prune --production

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]