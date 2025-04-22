require('dotenv').config()
const express = require('express')
const path = require('node:path')
const messagesRouter = require('./routes/messagesRouter')
const env = require('./config/env')

const app = express();

const assetsPath = path.join('public');
app.use(express.static(assetsPath));

app.set('views', path.join('views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', messagesRouter);

app.use((err, req, res, next) => {
  res.render('error', { error: err })
});

const PORT = env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application running - Listening on http://localhost:${PORT}`)
})
