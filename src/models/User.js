const mongoose = require('mongoose')

const {Schema} = mongoose
const {mainConnection} = require('../config/mainconnection')

const userSchema = new Schema({
    store : {type:mongoose.Types.Int32},
    id: String,
    username: String, 
    password: String,
    createAt: Date,
    updateAt: Date
})

const user = mainConnection.model('User', userSchema)

module.exports = user