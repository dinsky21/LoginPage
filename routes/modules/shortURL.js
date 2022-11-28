const express = require('express')
const router = express.Router()
const URLlist = require('../../models/URL')
const generateCode = require('../../public/javascripts/urlTransform')
const PORT = process.env.PORT || 3000

router.post('/', (req, res) => {
  const { url } = req.body
  if (url.trim() === '') {
    res.redirect('/')
  } else {
    return URLlist.find()
      .lean()
      .then((arr) => {
        const isInDB = arr.filter((e) => e.url.includes(url))
        if (isInDB.length >= 1) {
          res.render('shortURL', { web: isInDB[0] })
        } else {
          const code = generateCode(url)
          const shortURL = `http://${req.hostname}:${PORT}/${code}`
          const web = { url, shortURL }
          URLlist.insertMany({ url, shortURL }).then(
            res.render('shortURL', { web })
          )
        }
      })
      .catch((error) => console.log(error))
  }
})

module.exports = router
