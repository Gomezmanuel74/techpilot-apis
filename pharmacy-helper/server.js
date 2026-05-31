const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/normalize-drug', (req, res) => {
  res.json({ success: true, message: 'Pharmacy endpoint working' });
});

app.listen(3000, () => console.log('Pharmacy Server running'));