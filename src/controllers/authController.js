const {createUser, signIn, getNewAccesToken} = require('../services/userService')


exports.createUser = async (req, res) =>{
    try{
        const {status, message} = await createUser(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.signIn = async (req,res) =>{
    try{
        const {status, message } = await signIn(req.body)
        res.status(status).json({message})
    }catch(error){
        res.status(400).json(error.message)
    }
}

exports.newAccessToken = async (req, res)=>{
    let refreshToken = req.params.refreshToken
    try{
        const {status, message} = await getNewAccesToken(refreshToken)
        res.status(status).json({message: message})
    }catch(error){
        res.status(400).json(error.message)
    }
}