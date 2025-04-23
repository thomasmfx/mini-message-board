const db = require('../db/queries')
const utils = require('../utils/date')
const { body, validationResult } = require('express-validator')

const alphaError = 'must contain only alphanumeric characters.';
const lengthError = (min, max) =>
  !min
    ? `must be less than ${max} characters.`
    : `must be between ${min} and ${max} characters.`

const validateResult = [
  body('username').trim()
    .isLength({ min: 1, max: 25 }).withMessage(`username ${lengthError(3, 25)}`)
    .isAlphanumeric().withMessage(`username ${alphaError}`),
  body('messageText').trim()
    .isLength({ min: 1, max: 150 }).withMessage(`message ${lengthError(1, 150)}`),
]

const messagesListGet = async (req, res) => {
  const messages = await db.getAllMessages()

  res.render('index', {
    messages: messages,
    formatDate: utils.displayDateFormatted
  })
}

const messagesGet = async (req, res, next) => {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId)

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

    await db.insertMessage(message.username, message.text)

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