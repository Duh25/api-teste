const sendHello = require('../services/utils')
const create = require('../services/storeService')
const utils = require('../services/utils')


exports.getHello = async (req, res) =>{
    res.status(200).json({message: "OK"})
}
