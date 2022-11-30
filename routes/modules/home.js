// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const UserSchema = require('../../models/users')
const PORT = process.env.PORT || 3000
const session = require('express-session')
// 準備引入路由模組

// 首頁
router.get('/', (req, res) => {
  if (req.session.authorized) {
    res.render('welcome', { user: req.session.user })
  } else {
    res.render('index')
  }
})

router.post('/', (req, res) => {
  const { password, email } = req.body
  UserSchema.findOne({ password, email })
    .lean()
    .then((obj) => {
      if (obj !== null) {
        req.session.user = obj //將登入的資訊與放入session.user中
        req.session.authorized = true
        res.render('welcome', { user: obj })
      } else {
        const message = 'email or password error'
        res.render('index', { message })
      }
    })
    .catch((error) => console.log(error))
})

// 匯出路由器
module.exports = router
