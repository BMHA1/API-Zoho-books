const router = require('express').Router()
const controller = require('../controllers/company')




router.post('/', controller.registerCompany)
router.post('/login',controller.loginCompany)

module.exports = router;