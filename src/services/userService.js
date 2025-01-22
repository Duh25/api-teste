const user = require('../models/User')
const utils = require('../services/utils')
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.createUser = async (body)=>{
    try{
        body.password = await utils.hashCode(body.password)
        body.createAt = await utils.todayISOdate()
       return{
         status: 200,
         message: await user.create(body)
       }
    }catch(error){
        throw error
    }
}

exports.findUser = async (body)=>{
    const {page=1, limit=5, ...filter} = body
    const total = await user.countDocuments()

    try{
        let paging = await utils.createPagination(page, limit, total)
        
        return{
            status: 200,
            message: {
                paging,
                "data": await user.find(filter).skip(paging.offset).limit(paging.limit)
            }    
        }
    }catch(error){
        throw error
    }
}

exports.updatePassword = async (body)=>{
    const {id, password} = body
    let filter = {"id" : id}
  
    try{

        const us = (await this.findUser(filter)).message.data[0]
      
        const newOb = newObject(us)
        
        newOb.password = await utils.hashCode(""+password)

        return{
            status: 200,
            message: await user.updateOne(filter, newOb)
        }
    }catch(error){
        console.log(error)
    }

}

exports.signIn = async (body)=>{
    const { store , username, password} = body

    let filter = {
        username: username
    }
    try{
        let userverify = (await user.find(filter))[0]

        if(userverify === null || userverify === undefined){
            return{
                status: 401,
                message: "Usuário Inexistente"
            }
        }

      if(store === userverify.store && utils.hashCode(password) === (userverify.password) ){

        const accessToken = jwt.sign({store: store, user: userverify.id }, process.env.JWT_SECRET, {expiresIn: '1h'})
        const refreshToken =  jwt.sign({store: store, user: userverify.id }, process.env.JWT_SECRET, {expiresIn: '1d'})

        return{
            status: 200,
            message: {
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        }
      }else{
        return{
            status: 401,
            message: "Credenciais incorretas" 
        }
      }

    }catch(error){
        throw error
    }

}

// exports.signOut = async (body)=>{

// }

exports.getNewAccesToken = async (body)=>{
    let refreshToken = body
    try{
       const {store, user} = await jwt.verify(refreshToken, process.env.JWT_SECRET)
       const accessToken = jwt.sign({store: store, user: user }, process.env.JWT_SECRET, {expiresIn: '1h'})

       return{
         status: 200,
         message: {
            accessToken: accessToken
         }
       }

    }catch(error){
        throw error
    }

    
}

async function newObject(body){
    return {
        "store": body.store,
        "id": body.id,
        "username": body.username,
        "password": body.password,
        "createat": body.createAt,
        "updateAt": await utils.todayISOdate()
    }
} 

