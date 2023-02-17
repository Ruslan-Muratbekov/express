const Router = require('../framework/Router')
const Callback = require('./user-collback')

const router = new Router()

router.get('/users', Callback.getUsers)
router.post('/users', Callback.createUser)

module.exports = router