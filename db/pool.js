const { Pool } = require('pg');
const env = require('../config/env');

const connectionString = env.DATABASE_URL;

module.exports = new Pool({
  connectionString
});