const { Pool } = require('pg');
const env = require('../config/env');

const connectionString = process.env.DATABASE_URL;

module.exports = new Pool({
  connectionString,
  ssl: connectionString.includes('railway') ? { rejectUnauthorized: false } : false
});