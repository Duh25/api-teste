const order = require("../models/Order")
const {createPagination} = require("../services/utils")

exports.createOrder = async(body)=> {
    try{
        return{
            status: 201,
            message: await order.create(body)
        }
    }catch(error){
        throw error
    }
}

exports.updateOrder = async (body)=> {
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

exports.deleteOrder = async (body)=> {
    let filter = {"id" : body.id}
    try{
       return {
            status: 200,
            message: await order.deleteOne(filter)
       }
    }catch(error){
        throw error
    }
}

exports.find = async(body)=> {
    const {page=1, limit=5, ...filter} = body
    const total = await order.countDocuments()

    try{

        let paging = await createPagination(page, limit, total)
    
        return{
            status: 200,
            message: {
                paging,
                "data": await order.find(convertDates(filter)).skip(paging.offset).limit(paging.limit)
            }    
        }
    }catch(error){
        throw error
    }
}

exports.findByDate = async(body)=>{
    const {min, max} = body
    let filter = {
        'dateOfSale': {
         '$gte': new Date(min), 
         '$lte': new Date(max)
        }
    }
    let sortConfig = {
        dateOfSale: 1
    }
    
    try{

        return{
            status: 200,
            message: {
                "data": await order.find(filter).sort(sortConfig)
            }    
        }
    }catch(error){
        throw error
    }
}


