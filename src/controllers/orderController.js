const {createOrder, updateOrder} = require("../services/orderService")

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