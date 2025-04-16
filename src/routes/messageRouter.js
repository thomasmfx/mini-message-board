const Router = require('express')
const path = require('node:path')
const db = require('../config/db');

const messageRouter = Router();

messageRouter.set('views', path.join('views'));
messageRouter.set('view engine', 'ejs');

messageRouter.get('/:messageId', (req, res, next) => {
  const { messageId } = req.params;
  const message = db.messages[messageId];

  if (!message) {
    const error = new Error();
    error.status = 404;
    error.message = 'Message not found';
    return next(error);
  }

  res.render('message', {
    message: message,
  })
})

module.exports = messageRouter



