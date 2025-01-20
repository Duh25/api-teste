const {createUser} = require('../services/userService')

exports.createUser = async (req, res) =>{
    try{
        const {status, message} = await createUser(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).status({message: error.message})
    }
}


