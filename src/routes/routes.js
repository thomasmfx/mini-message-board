const indexRouter = require('./indexRouter')
const newMessageRouter = require('./newMessageRouter')

module.exports = {
  index: indexRouter,
  newMessage: newMessageRouter
}