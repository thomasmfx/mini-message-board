const Router = require('express')
const path = require('node:path')
const db = require('../config/db');

const messageRouter = Router();

messageRouter.set('views', path.join('views'));
messageRouter.set('view engine', 'ejs');

messageRouter.get('/:messageId', (req, res) => {
  const { messageId } = req.params;

  res.render('message', {
    message: db.messages[messageId],
  })
})

module.exports = messageRouter



