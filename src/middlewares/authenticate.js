const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.verifyJwt = async (req, res, next)=> {
    const token = req.headers['acesss-token']

    try{
        if(token === undefined || token === null){
            return res.status(401).json({message: "AUTH FALILED"})  
        }
        const {store, user} = await jwt.verify(token, process.env.JWT_SECRET)

        req.storeId = store
        req.userId = user
        next();
    }catch(error){
        res.status(401).json({message: "AUTH FALILED"})
    }
}
