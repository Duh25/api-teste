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

exports.findByName = async(body)=>{
    let nameUser = body.name
    try{
     return{
        status: 200,
        message:  await store.findOne({name: nameUser})
     }
    }catch(error){
        throw error
    }
}

exports.findByCnpj = async(body)=>{
    let cnpjUser = body.cnpjUser
    try{
        return {
            status: 200,
            message: await store.findOne({cnpj: cnpjUser})
        }
    }catch(error){
        throw error
    }
}
