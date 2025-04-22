const db = require('../db/queries')
const utils = require('../utils/date')

const messagesListGet = async (req, res) => {
  const messages = await db.getAllMessages()

  res.render('index', {
    messages: messages,
    dateFormatted: utils.displayDateFormatted
  })
}

const messagesGet = async (req, res, next) => {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId)

  console.log(message)

  if (!message) {
    const error = new Error();
    error.status = 404;
    error.message = 'Message not found';
    return next(error);
  }

  res.render('message', {
    message: message[0],
  })
}

const messagesNewGet = async (req, res) => {
  res.render('new')
}

const messagesNewPost = async (req, res) => {
  const message = {
    username: req.body.username,
    text: req.body.messageText
  }

  await db.insertMessage(message.username, message.text)

  res.json({ success: true })
}

module.exports = {
  messagesListGet,
  messagesGet,
  messagesNewGet,
  messagesNewPost
}