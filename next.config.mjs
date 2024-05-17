// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Установите директорию вывода статических файлов
	distDir: 'out',
	// Опции экспорта
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/' },
			'/_not-found': { page: '/_not-found' },
		}
	}
};

export default nextConfig;
