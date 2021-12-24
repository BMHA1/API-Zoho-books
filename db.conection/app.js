const express = require('express');
const app = express();
app.use(express.json())
const custormersRouter=require('../route/customer')
const dotenv = require('dotenv').config()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/customers',custormersRouter)


console.log(process.env.PORT)
app.listen(process.env.PORT, () => console.log('funcionando'))