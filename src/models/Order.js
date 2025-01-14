const mongoose = require('mongoose')

const {Schema} = mongoose
const {mainConnection} = require('../config/mainconnection')

const orderSchema = new Schema({
    id: {type:mongoose.Types.Int32},
    store: {type:mongoose.Types.Int32},
    pointSale: String,
    status: String,
    orderId: {type:mongoose.Types.Int32},
    dateOfSale: Date,
    parcial: {type:mongoose.Types.Decimal128},
    discount: {type:mongoose.Types.Decimal128},
    shipmentValue: {type:mongoose.Types.Decimal128},
    total: {type:mongoose.Types.Decimal128},
    customer: {
        id: String,
        name: String,
        cpf: String,
        rg: String,
        customerAddress:{
            address: String,
            number: {type:mongoose.Types.Int32},
            neighboorhood: String,
            city: String,
            state: String,
            zipCode: String,
            country: String,
            recipient: String
        }
    },
    productsSold:[
        {
            id: String,
            sku: String,
            name: String,
            price: {type:mongoose.Types.Decimal128},
            quantity: {type:mongoose.Types.Int32},
            total: {type:mongoose.Types.Decimal128}
        }
    ]
})