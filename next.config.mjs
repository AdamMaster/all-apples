// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.mjs
const nextConfig = {
	// Включение режима строгой проверки типов
	reactStrictMode: true,

	// Настройки для обработки изображений (если вы используете встроенную оптимизацию изображений Next.js)
	// images: {
	// 	domains: ['adammaster-opt-rinok-bb8c.twc1.net'], // Замените 'example.com' на ваш домен
	// },

	// Настройки для развертывания на контейнере
	output: 'standalone',

	// Настройки для окружения
	env: {
		CUSTOM_VAR: process.env.CUSTOM_VAR, // Добавьте любые пользовательские переменные окружения
	},

	// Другие пользовательские настройки
	// webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
	//   // Измените webpack-конфигурацию по мере необходимости
	//   return config;
	// },
};

export default nextConfig;
