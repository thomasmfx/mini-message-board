require('dotenv').config()
const express = require('express')
const path = require('node:path')
const db = require('./config/db')
const utils = require('./utils/utils')

const app = express();

// View engine
app.set('views', path.join('views'));
app.set('view engine', 'ejs');

// Styles
const assetsPath = path.join('public');
app.use(express.static(assetsPath));

// App
app.get('/', (req, res) => {
  res.render('index', {
    messages: db.messages,
    displayDateFormatted: utils.displayDateFormatted,
    messageAnimations: utils.messageAnimations
  })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Application running - Listening on http://localhost:${PORT}`)
})
