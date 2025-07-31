// const nextConfig = {
// 	reactStrictMode: true,
// 	output: 'export',
// 	images: {
// 		unoptimized: true,
// 	},
// };


// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.allapples.ru',
					},
				],
				destination: 'https://allapples.ru/:path*',
				permanent: true,
			},
		]
	},
};

export default nextConfig;