const user = require('../models/User')
const {createPagination} = require('../services/utils')

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
        let paging = await createPagination(page, limit, total)
        
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

exports.updatePassword = async (id, pass)=>{
    let filter = { "id": body.id }
    let nw =  (await findUser(filter)).message.data

    nw.password = utils.hashCode(pass)
    mw.updateAt = utils.todayISOdate
    try{
        return{
            status: 200,
            message: ( await user.updateOne(filter, nw))
        }
    }catch(error){
        throw error
    }
}