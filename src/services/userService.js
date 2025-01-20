const user = require('../models/User')
const utils = require('../services/utils')

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

exports.singIn = async (body)=>{
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
        return{
            status: 200,
            message: "Usuário Logado"
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

