const { Pool } = require('pg')
const env = require('../config/env')

module.exports = new Pool({
  connectionString: `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
})