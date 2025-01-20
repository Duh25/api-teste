const {createStore, updateStore, deleteStore, find} = require('../services/storeService')

exports.createStore = async (req,res) =>{
    try{
        const {status, message} = await createStore(req.body)
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

exports.deleteStore = async (req, res) => {
    let {id} = req.params
    try{
        const {status, message} = await deleteStore({id})
        res.status(status).json(message)
    }catch(error){
        res.status(400).json({message : error.message})
    }
}
exports.find = async (req, res)=>{
    let filter = req.query
    try{
        const {status, message} = await find(filter)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json({message : error.message})
    }
}
