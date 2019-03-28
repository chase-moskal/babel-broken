
module.exports = (api) => {
	api.cache(true)
	return {
		ignore: [
			"babel.config.js",
			"dist",
			"ignore-this",
			"node_modules"
		]
	}
}
