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
    let filter = body
    let page = body.page || 1
    let limit = body.limit || 5
    let total = store.countDocuments()

    try{
        let paging = await createPagination(page, limit)
        paging.total = await total.countDocuments()
        
        delete filter.limit 
        delete filter.page

        
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

