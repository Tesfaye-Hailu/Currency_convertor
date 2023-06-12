const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "/build")));
// API route for currency conversion
app.get('/convert', (req, res) => {
  const baseCurrency = req.query.base;
  const targetCurrency = req.query.target;
  const amount = parseFloat(req.query.amount);

  // Replace the placeholder implementation with your actual currency conversion logic
  const exchangeRate = 0.85; // Example exchange rate
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  res.json({ convertedAmount });
});

// New API route for performing additional task
app.get('/perform-task', (req, res) => {
  // Implement your additional task logic here
  // You can access any query parameters using req.query
  // Example task response
  res.json({ message: 'Task performed successfully' });
});

const port = 3001; // Set the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
