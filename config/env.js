require('dotenv').config()

const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL
}

module.exports = env;