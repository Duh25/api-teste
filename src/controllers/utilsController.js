const sendHello = require('../services/utils')
const {findAll} = require('../services/orderService')
const {toHeaders, toExcel} = require('../services/utils')
const {singIn} = require('../services/userService')



exports.getHello = async (req, res) =>{
    try{
        
        const {status, message } = await singIn(req.body)

       res.status(status).json({message: message})
    }catch(error){
        res.status(400).json(error.message)
    }
}
