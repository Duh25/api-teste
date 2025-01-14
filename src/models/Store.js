const mongoose = require('mongoose')

const {Schema} = mongoose
const {mainConnection} = require('../config/mainconnection')

const storeSchema = new Schema({
    id: {type:mongoose.Types.Int32},
    cnpj: String,
    name: String, 
    createAt: Date,
    updateAt: Date
})

const store = mainConnection.model('Store', storeSchema)

module.exports = store