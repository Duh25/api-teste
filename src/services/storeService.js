const store = require('../models/Store')
const utils = require('../services/utils')
const {createPagination} = require('../services/utils')

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
    const {page=1, limit=5, ...filter} = body
    const total = await store.countDocuments()

    try{
        let paging = await createPagination(page, limit, total)
        
        return{
            status: 200,
            message: {
                paging,
                "data": await store.find(filter).skip(paging.offset).limit(paging.limit)
            }    
        }
    }catch(error){
        throw error
    }
}

