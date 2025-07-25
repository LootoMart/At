const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const students = {
  "STU001": "Rahul Kumar",
  "STU002": "Priya Singh",
  "STU003": "Amit Raj"
};

app.post('/mark-attendance', (req, res) => {
  const { qrData } = req.body;

  const name = students[qrData];
  if (!name) {
    return res.json({ success: false, message: "Student not found" });
  }

  const query = \`INSERT INTO attendance (student_id, name) VALUES (?, ?)\`;
  db.run(query, [qrData, name], function (err) {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    }

    res.json({ success: true, name });
  });
});

app.listen(PORT, () => {
  console.log(\`✅ Server running at http://localhost:\${PORT}\`);
});
