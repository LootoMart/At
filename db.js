const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./attendance.db');

db.serialize(() => {
  db.run(\`
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id TEXT NOT NULL,
      name TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  \`);
});

module.exports = db;
