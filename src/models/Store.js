const mongoose = require('mongoose')
const {Schema} = mongoose
const {mainConnection} = require('../config/mainconnection')
const Int32 = require("mongoose-int32").loadType(mongoose)

const storeSchema = new Schema({
    id: Int32,
    cnpj: String,
    name: String, 
    createAt: Date,
    updateAt: Date
})

const store = mainConnection.model('Store', storeSchema)

module.exports = store