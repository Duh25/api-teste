const express = require('express')
const {createStore, updateStoreController, deleteStore, find} = require('../controllers/storeController.js')


const router = express.Router()

router.post('/create', createStore )
router.put('/update:', updateStoreController)
router.get('/find', find)
router.delete('/delete/:id', deleteStore)


module.exports = router