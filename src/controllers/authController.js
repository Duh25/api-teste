const {createUser, singIn} = require('../services/userService')

exports.createUser = async (req, res) =>{
    try{
        const {status, message} = await createUser(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).status({message: error.message})
    }
}

exports.singIn = async (req,res) =>{
    try{
        const {status, message } = await singIn(req.body)

        res.status(status).json({message: message})
    }catch(error){
        res.status(400).json(error.message)
    }
}
