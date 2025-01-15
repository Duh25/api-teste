const mongoose = require('mongoose')
const Int32 = require("mongoose-int32").loadType(mongoose)
const Double = require('@mongoosejs/double')

const {Schema} = mongoose
const {mainConnection} = require('../config/mainconnection')

const orderSchema = new Schema({
    id: Int32,
    store: Int32,
    pointSale: String,
    status: String,
    orderId: Int32,
    dateOfSale: Date,
    parcial:  Double,
    discount:  Double,
    shipmentValue:  Double,
    total:  Double,
    customer: {
        id: String,
        name: String,
        cpf: String,
        rg: String,
        customerAddress:{
            address: String,
            number: Int32,
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
            price:  Double,
            quantity: Int32,
            total: Double
        }
    ]
})

const order = mainConnection.model('Order', orderSchema)

module.exports = order