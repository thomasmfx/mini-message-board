const db = require('../config/db')
const utils = require('../utils/date')

const messagesListGet = async (req, res) => {
  const messages = db.messages

  res.render('index', {
    messages: messages,
    dateFormatted: utils.displayDateFormatted
  })
}

const messagesGet = async (req, res, next) => {
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
}

const messagesNewGet = async (req, res) => {
  res.render('new')
}

const messagesNewPost = async (req, res) => {
  const message = {
    user: req.body.username,
    text: req.body.messageText,
    added: new Date()
  }

  db.messages.push(message)

  res.json({ success: true })
  // setTimeout(() => {
  //   res.redirect('/')
  // }, (2000)) // animation ".animate-submit-exit" + 500 ms
}

module.exports = {
  messagesListGet,
  messagesGet,
  messagesNewGet,
  messagesNewPost
}