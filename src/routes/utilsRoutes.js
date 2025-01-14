const express = require('express')
const controllerUtils = require('../controllers/utils')

const router = express.Router()

router.get('/hello',controllerUtils.getHello)

module.exports = router