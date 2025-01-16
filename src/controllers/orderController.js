const {createOrder, updateOrder, deleteOrder, find} = require("../services/orderService")

exports.createOrder = async (req, res)=>{
    try{
        const {status, message} = await createOrder(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.updateOrder = async (req, res) =>{
    try{
        const {status, message} = await updateOrder(req.body)
        res.status(status).json({message})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.deleteOrder = async (req, res) =>{
    try{
        const {status, message } = await deleteOrder(req.body)
        res.status(status).json({message})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.find = async (req,res)=>{
    let filter = req.query
    try{
        const {status, message} = await find(filter)
        res.status(status).json({message})
    }catch(error){
        res.status(400).json({message : error.message})
    }
}