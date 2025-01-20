const express = require('express')

const {createUser, find, updatePassword} = require('../controllers/userController')


const router = express.Router()

// router.post('/create', createUser)
router.get('/find', find)
router.put('/update', updatePassword)


module.exports = router