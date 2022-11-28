const UserSchema = require('../users') // 載入 model
const userList = require('../../users.json').users

const db = require('../../config/mongoose')

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < userList.length; i++) {
    UserSchema.insertMany({
      firstName: userList[i].firstName,
      email: userList[i].email,
      password: userList[i].password,
    })
  }
  console.log('done')
})
