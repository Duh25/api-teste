const order = require("../models/Order")

exports.createOrder = async(body)=>{
    try{
        return{
            status: 201,
            message: await order.create(body)
        }
    }catch(error){
        throw error
    }
}

exports.updateOrder = async (body)=>{
    let filter = { "id": body.id }
    body.dateOfSale = new Date(Date.now()).toISOString()
    try{
        return{
            status: 200,
            message: ( await order.updateOne(filter, body ) || "OK")
        }
    }catch(error){
        throw error
    }
}



