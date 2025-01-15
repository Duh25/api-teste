const sendHello = require('../services/utils')
const create = require('../services/storeService')

exports.getHello = async (req, res) =>{
    let a = await sendHello()
    let b = req.query
    console.log(b)
    res.status(a.status).json(a.message)
}
