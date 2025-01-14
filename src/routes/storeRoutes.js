const express = require('express')
const {createStore, updateStoreController} = require('../controllers/storeController.js')

const router = express.Router()

router.post('/create', createStore )
router.put('/update', updateStoreController)

module.exports = router