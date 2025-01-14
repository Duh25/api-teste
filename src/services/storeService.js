const store = require('../models/Store')

const store = require('../models/Store')

const createStore = async (body)=>{
   try{
      await store.create(body)
   }catch(error){
        throw error
   }
}

const updateStore = async (body)=>{
    let id = body.id
    try{
        await store.updateOne(id, body)
    }catch(error){
        throw error
    }
}

const deleteStore = async (body)=>{
    let id = body.id
    try{
        await store.deleteOne(id)
    }catch(error){
        throw error
    }
}

const findByName = async(body)=>{
    let nameUser = body.name
    try{
      await store.findOne({name: nameUser})
    }catch(error){
        throw error
    }
}

const findByCnpj = async(body)=>{
    let cnpjUser = body.cnpjUser
    try{
        await store.findOne({cnpj: cnpjUser})
    }catch(error){
        throw error
    }
}