const indexRouter = require('./indexRouter')
const newMessageRouter = require('./newMessageRouter')
const messageRouter = require('./messageRouter')

module.exports = {
  index: indexRouter,
  newMessage: newMessageRouter,
  message: messageRouter
}