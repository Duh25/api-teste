const store = require('../models/Store')


exports.createStore = async (body)=>{
   try{
        return {
            status: 201,
            message:  await store.create(body)
        }
   }catch(error){
        throw error
   }
}

exports.updateStore = async (body)=>{
    let filter = { "id": body.id }
    body.updateAt = new Date(Date.now()).toISOString()
    try{
        return{
            status: 200,
            message: ( await store.updateOne(filter, body ) || "OK")
        }
    }catch(error){
        throw error
    }
}

exports.deleteStore = async (body)=>{
    let filter = {"id" : body.id}
    try{
       return {
            status: 200,
            message: await store.deleteOne(filter)
       }
    }catch(error){
        throw error
    }
}

exports.find = async(body)=>{
    let filter = body
    try{
        return { 
            status: 200,
            message: await store.find(filter) 
        }
    }catch(error){
        throw error
    }
}

