const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    me,
    allUsers
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',protect, me)
router.get('/allusers', allUsers)

module.exports = router