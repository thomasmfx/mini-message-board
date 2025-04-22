const Router = require('express')
const messagesController = require('../controllers/messagesController')

const messagesRouter = Router();

messagesRouter.get('/', messagesController.messagesListGet)
messagesRouter.get('/new', messagesController.messagesNewGet)
messagesRouter.post('/new', messagesController.messagesNewPost)
messagesRouter.get('/:messageId', messagesController.messagesGet)

module.exports = messagesRouter
