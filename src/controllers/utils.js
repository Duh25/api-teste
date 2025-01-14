const sendHello = require('../services/utils')

exports.getHello = async (req, res) =>{
    let a = await sendHello()
    console.log(a)
    res.status(a.status).json(a.message)
}