// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// const URLlist = require('../../models/URL')
// const generateCode = require('../../public/javascripts/urlTransform')
const PORT = process.env.PORT || 3000
// 準備引入路由模組

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// router.get('/:shortURL', (req, res) => {
//   const { shortURL } = req.params
//   // console.log(shortURL)
//   URLlist.findOne({
//     shortURL: `http://${req.hostname}:${PORT}/${shortURL}`,
//   })
//     .lean()
//     .then((r) => res.redirect(`${r.url}`))
//     .catch((error) => console.log(error))
// })

// 匯出路由器
module.exports = router
