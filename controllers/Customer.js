const { Customer } = require('../models/index.js')
const APIconsumer = require('../Apiconsumer/ApiCustomers')
const filterData = require('../Helpers/orderdate')


module.exports.CreateCustomer = async (req, res) => {
    try {
        let result = await APIconsumer.createUser(req.body)
        res.status(200).json({ Data: result })
    } catch (error) {
        res.json({
            message: 'No se ha logrado registrar los nuevos clients',
            errors: error,
        })
        console.log(error)
    }
}
module.exports.SearchCustomers = async (req, res) => {
    try {
        let result = await APIconsumer.listCustomers()
        let data = filterData.filterData(result.contacts) //result debe tener un array de objectos
        console.log(data)
        let Customers = await Customer.bulkCreate(data)
        res.status(200).json({ Data: Customers })
    } catch (error) {
        res.json({
            message: 'No se ha logrado registrar los nuevos clients',
            errors: error,
        })
        console.log(error)
    }
}
module.exports.SearchNameCustomer = async (req, res) => {

    try {
        let result = await APIconsumer.shearchCustomerName(req.query.name)
        res.status(200).json({ Data: result })
    } catch (error) {
        res.json({
            message: 'No eres admin.',
            errors: error,
        })
    }
}
module.exports.UpdateContact = async (req, res) => {
    try {
        let userModify = await APIconsumer.updateContact(req.params.id, req.body)
        res.status(200).json({ Data: userModify })
    } catch (error) {
        res.json({
            message: 'No se ha podido realizar las modificaciones.',
            errors: error,
        })
    }
}
// module.exports.SearchCustomers