const { Pool } = require('pg');
const env = require('../config/env');

const connectionString = process.env.DATABASE_URL ||
  `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;

module.exports = new Pool({
  connectionString,
  ssl: connectionString.includes('railway') ? { rejectUnauthorized: false } : false
});