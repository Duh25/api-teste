const express = require('express')
const controllerUtils = require('../controllers/utilsController')

const router = express.Router()

router.get('/hello',controllerUtils.getHello)

module.exports = router