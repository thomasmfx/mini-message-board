require('dotenv').config()
const express = require('express')
const path = require('node:path')
const routes = require('./routes/routes')

const app = express();

const assetsPath = path.join('public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

// App
app.use('/newMessage', routes.newMessage);
app.use('/', routes.index);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Application running - Listening on http://localhost:${PORT}`)
})
