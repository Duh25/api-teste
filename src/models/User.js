const mongoose = require('mongoose')
const Int32 = require("mongoose-int32").loadType(mongoose)

const {Schema} = mongoose
const {mainConnection} = require('../config/mainconnection')

const userSchema = new Schema({
    store : Int32,
    id: Int32,
    username: String, 
    password: String,
    createAt: Date,
    updateAt: Date
})

const user = mainConnection.model('User', userSchema)

module.exports = user