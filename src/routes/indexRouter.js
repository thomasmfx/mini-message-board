const Router = require('express')
const path = require('node:path')
const db = require('../config/db');
const utils = require('../utils/utils');

const indexRouter = Router();

indexRouter.set('views', path.join('views'));
indexRouter.set('view engine', 'ejs');

indexRouter.get('/', (req, res) => {
  res.render('index', {
    messages: db.messages,
    displayDateFormatted: utils.displayDateFormatted
  })
})

module.exports = indexRouter



