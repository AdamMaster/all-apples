// next.config.js или next.config.mjs
const nextConfig = {
	webpack: (config, { isServer }) => {
		// Настройка внешних модулей для серверной части
		if (isServer) {
			config.externals.push(
				(context, request, callback) => {
					if (/^fs$/.test(request)) {
						return callback(null, false);
					}
					if (/^dns$/.test(request)) {
						return callback(null, false);
					}
					if (/^net$/.test(request)) {
						return callback(null, false);
					}
					return callback();
				}
			);
		}

		return config;
	},
};

export default nextConfig;