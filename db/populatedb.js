const { Client } = require('pg')
const env = require('../config/env')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(25) NOT NULL,
  text VARCHAR(150) NOT NULL,
  date TIMESTAMP NOT NULL
);

INSERT INTO messages (username, text, date) VALUES
  ('Amando', 'Hi there!', CURRENT_TIMESTAMP),
  ('Charles', 'Hello World! Excited to be here.', CURRENT_TIMESTAMP),
  ('Bianca', 'Just wanted to say hello!', CURRENT_TIMESTAMP),
  ('David', 'Is anyone else having trouble with the network?', CURRENT_TIMESTAMP),
  ('Amando', 'This is cool!', CURRENT_TIMESTAMP),
  ('Elena', 'What''s the weather like in São Paulo right now?', CURRENT_TIMESTAMP),
  ('Charles', 'Coding is fun!', CURRENT_TIMESTAMP),
  ('Sofia', 'Looking forward to the weekend!', CURRENT_TIMESTAMP),
  ('Ricardo', 'Any recommendations for a good restaurant around here?', CURRENT_TIMESTAMP),
  ('System', 'This is a test message.', CURRENT_TIMESTAMP);
`

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()