const express = require('express')
const controllerUtils = require('../controllers/utilsController')

const router = express.Router()

router.post('/hello',controllerUtils.getHello)

module.exports = router