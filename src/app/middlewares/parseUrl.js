module.exports = (base) => (req, res) => {
	const parseURL = new URL(req.url, base)
	const params = {}
	parseURL.searchParams.forEach((value, key) => params[key] = value)

	req.pathname = parseURL.pathname
	req.params = params
}