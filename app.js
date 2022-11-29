require('dotenv').config({ override: true })
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
const PORT = process.env.PORT || 3000
const session = require('express-session')

//view engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

//static files
app.use(express.static('public'))

//RESTful style
app.use(methodOverride('_method'))

//body-parsing code handle
app.use(bodyParser.urlencoded({ extended: true }))

//session
app.use(
  session({
    secret: 'mySecret', //存放sessionID
    name: 'user', // optional，存放在cookie的key
    saveUninitialized: false,
    resave: true,
  })
)

//routing
app.use(routes)

//listen
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
})
