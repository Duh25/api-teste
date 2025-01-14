const {createStore, updateStore} = require('../services/storeService')

exports.createStore = async (req,res) =>{
    try{
        const {status, message} = await createStore(req.body)
        console.log(status)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
exports.updateStoreController = async (req, res) =>{
    try{
        const {status, message} = await updateStore(req.body)
        res.status(status).json({message})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}