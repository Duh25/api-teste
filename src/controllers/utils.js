const sendHello = require('../services/utils')
const create = require('../services/storeService')

exports.getHello = async (req, res) =>{
    let a = await sendHello()
    res.status(a.status).json(a.message)
}
