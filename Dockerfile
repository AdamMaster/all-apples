# Используем официальный образ Node.js в качестве базового
FROM node:18-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем зависимости
# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости

RUN npm ci && npm cache clean --force

# Копируем исходный код
COPY . .

# Сборка приложения
RUN npm run build

# Удаляем dev-зависимости
RUN npm prune --production

# Используем более легковесный образ Node.js для запуска
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранное приложение и установленные модули из предыдущего этапа
COPY --from=base /app /app

# Устанавливаем переменные окружения
ENV NODE_ENV=production

# Открываем порт
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]