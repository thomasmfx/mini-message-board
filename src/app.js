require('dotenv').config()
const express = require('express')
const path = require('node:path')
const routes = require('./routes/routes')

const app = express();

const assetsPath = path.join('public');
app.use(express.static(assetsPath));

app.set('views', path.join('views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/message', routes.message);
app.use('/newMessage', routes.newMessage);
app.use('/', routes.index);

app.use((err, req, res, next) => {
  res.render('error', { error: err })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application running - Listening on http://localhost:${PORT}`)
})
