const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/generate', (req, res) => {
  res.json({ success: true, message: 'QR Generator endpoint working' });
});

app.listen(3000, () => console.log('QR Server running'));