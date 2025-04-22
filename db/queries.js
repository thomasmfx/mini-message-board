const pool = require('./pool')

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const query = {
    text: "SELECT * FROM messages WHERE id = ($1)",
    values: [id]
  }
  const { rows } = await pool.query(query)
  return rows;
}

async function insertMessage(username, text) {
  const query = {
    text: "INSERT INTO messages (username, text, date) VALUES ($1, $2, CURRENT_TIMESTAMP)",
    values: [username, text]
  }
  await pool.query(query)
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage
}