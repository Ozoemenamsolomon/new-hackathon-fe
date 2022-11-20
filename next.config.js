/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
});

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['randomuser.me'],
	},
};

module.exports = withPWA(nextConfig);
