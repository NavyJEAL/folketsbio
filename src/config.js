const production = {
	basePath: '/folketsbio',
	assetPath: '/folketsbio'
};

const development = {
	basePath: '',
	assetPath: 'folketsbio'
};

const isProd = window.location.hostname.includes('github.io');

const config = isProd ? production : development;

export default config;