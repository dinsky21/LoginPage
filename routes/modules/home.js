// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000
// 準備引入路由模組

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 匯出路由器
module.exports = router
