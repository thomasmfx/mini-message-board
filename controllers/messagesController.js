const messageModel = require('../models/messageModel')
const validateResult = require('../middlewares/validators')
const { validationResult } = require('express-validator')
const utils = require('../utils/date')

const messagesListGet = async (req, res) => {
  const messages = await messageModel.getAllMessages()

  res.render('index', {
    messages: messages,
    formatDate: utils.displayDateFormatted
  })
}

const messagesGet = async (req, res, next) => {
  const { messageId } = req.params;
  const message = await messageModel.getMessageById(messageId)

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

const messagesNewPost = [
  validateResult,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('new', {
        errors: errors.array()
      });
    }

    const message = {
      username: req.body.username,
      text: req.body.messageText
    }

    await messageModel.insertMessage(message.username, message.text)

    setTimeout(() => {
      res.redirect('/')
    }, 1500) // animation duration
  }
]

module.exports = {
  messagesListGet,
  messagesGet,
  messagesNewGet,
  messagesNewPost
}