const Router = require('express')
const path = require('node:path');
const db = require('../config/db')

const newMessageRouter = Router();

newMessageRouter.set('views', path.join('views'));
newMessageRouter.set('view engine', 'ejs');

newMessageRouter.get('/', (req, res) => {
  res.render('newMessage')
})
newMessageRouter.post('/', (req, res) => {
  const message = {
    user: req.body.username,
    text: req.body.messageText,
    added: new Date()
  }

  db.messages.push(message)

  setTimeout(() => {
    res.redirect('/')
  }, (2000)) // animation ".animate-submit-exit" + 500 ms
})

module.exports = newMessageRouter
