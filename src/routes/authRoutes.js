const express = require('express')
const {createUser, signIn, newAccessToken} = require('../controllers/authController')

const router = express.Router()

router.post('/create', createUser)
router.post('/signin', signIn)
router.get('/refresh/:refreshToken', newAccessToken)

module.exports = router