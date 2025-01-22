require('dotenv').config()
const { default: mongoose } = require("mongoose");

try{
   const mainConnection = mongoose.createConnection(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
   module.exports = {mainConnection}
}catch(error){
    console.log(error.message)
}

