const Application = require('./framework/Application')
const router = require('./app/user-router')
const parseJson = require('./app/middlewares/parseJson')
const parseURL = require('./app/middlewares/parseUrl')
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = new Application()

app.use(parseJson)
app.use(parseURL('http://localhost:5000'))

app.addRouter(router)

const start = async () => {
	try {
		await mongoose.connect(process.env.mongoDB_URL)
		app.listen(PORT, console.log(`Server started on URL http://localhost:${PORT}/`))
	}catch (e) {
		console.log(e)
	}
}

start()