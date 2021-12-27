const { Customer } = require('../models/index.js')
const APIconsumer = require('../Apiconsumer/ApiCustomers')
const filterData = require('../Helpers/orderdate')
const decode = require('../Helpers/decodeToken')

module.exports.CreateCustomer = async (req, res) => {
    try {
        let payloadToken=decode.decodeToken(req.headers.token)
        console.log(payloadToken)
        let result = await APIconsumer.createUser(req.body, payloadToken)
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
        let payloadToken=decode.decodeToken(req.headers.token)
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
        let payloadToken=decode.decodeToken(req.headers.token)
        let result = await APIconsumer.shearchCustomerName(req.query.name,payloadToken)
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
        let payloadToken=decode.decodeToken(req.headers.token)
        let userModify = await APIconsumer.updateContact(req.params.id, req.body,payloadToken)
        res.status(200).json({ Data: userModify })
    } catch (error) {
        res.json({
            message: 'No se ha podido realizar las modificaciones.',
            errors: error,
        })
    }
}
module.exports.DeleteContact = async (req, res) => {
    try {
        let payloadToken=decode.decodeToken(req.headers.token)
        let UserDelete = await APIconsumer.deleteContact(payloadToken)
        res.status(200).json({ Data: UserDelete })
    } catch (error) {
        res.json({
            message: 'No se ha podido realizar las modificaciones.',
            errors: error,
        })
    }
}
// module.exports.SearchCustomers