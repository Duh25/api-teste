const {createUser,findUser} = require('../services/userService')

exports.createUser = async (req, res)=>{
    try{
        const {status, message} = await createUser(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).status({message: error.message})
    }
}

exports.find = async (req, res)=>{
    let filter = req.query
    try{
        const {status, message} = await findUser(filter)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}