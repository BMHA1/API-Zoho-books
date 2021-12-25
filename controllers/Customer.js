const { customer } = require('../models/index.js')
const APIconsumer = require('../Apiconsumer/ApiCustomers')
const orderData = require('../Helpers/orderdate')

module.exports.CreateCustomer = async (req, res) => {
    let result = await APIconsumer.listCustomers()
    let data = orderData.orderDate(result) //result debe tener un array de objectos

    
    res.status(200).json({ data: result })
    try {
        // let Customers = await customer.bulkcreate(result)
        // res.status(200).json({ Data:Customers})
    } catch (error) {
        res.json({
            message: 'No eres admin.',
            errors: error,
        })
    }
}
module.exports.SearchCustomers = async (req, res) => {
    let result = await APIconsumer.listCustomers()
    try {
        let Customers = await customer.bulkcreate(result)
        res.status(200).json({ Data: Customers })
    } catch (error) {
        res.json({
            message: 'No eres admin.',
            errors: error,
        })
    }
}
module.exports.SearchNameCustomer = async (req, res) => {
    let result = await APIconsumer.listCustomers()
    try {
        let Customers = await customer.bulkcreate(result)
        res.status(200).json({ Data: Customers })
    } catch (error) {
        res.json({
            message: 'No eres admin.',
            errors: error,
        })
    }
}
// module.exports.SearchCustomers