const express = require('express')
const app = express()
const router = express.Router()
const UserSchema = require('../../models/users')
const PORT = process.env.PORT || 3000

module.exports = router
