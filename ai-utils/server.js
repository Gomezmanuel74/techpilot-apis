const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/summarize', (req, res) => {
  res.json({ success: true, message: 'AI Summarize endpoint working' });
});

app.listen(3000, () => console.log('AI Server running'));