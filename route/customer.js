const router = require('express').Router()
const controller = require('../controllers/customer')



router.post('/', controller.CreateCustomer)//Crear clientes en base datos internas
router.get('/', controller.SearchCustomers)//Crear clientes en base datos internas
router.get('/name', controller.SearchNameCustomer)//Crear clientes en base datos internas
router.put('/:id', controller.UpdateContact)//Crear clientes en base datos internas


module.exports = router;