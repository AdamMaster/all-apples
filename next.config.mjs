// /** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	webpack(config, { isServer }) {
		if (isServer) {
			// Игнорировать модули, которые не поддерживаются браузером
			config.externals.push(
				'fs',
				'net',
				'dns'
			)
		}
		return config;
	},
};

export default nextConfig;
