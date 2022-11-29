const express = require('express')
const router = express.Router()
const UserSchema = require('../../models/users')
const PORT = process.env.PORT || 3000

router.post('/', (req, res) => {
  const { password, email } = req.body
  UserSchema.findOne({ password, email })
    .lean()
    .then((obj) => {
      if (obj !== null) {
        res.render('welcome', { user: obj })
      } else {
        res.redirect('/')
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router
