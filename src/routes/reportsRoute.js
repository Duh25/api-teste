const express = require('express')

const {reportByDate, reportByPointSale, reportByStatus} = require('../controllers/reportsController')

const router = express.Router()

router.post('/date',reportByDate)
router.post('/pointsale', reportByPointSale)
router.post('/status', reportByStatus)

module.exports = router