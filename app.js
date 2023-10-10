const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());


const data = ["hi","I","am","sakshi"];

// GET method to retrieve data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// POST method to add data
app.post('/api/data', (req, res) => {
  // Assuming JSON data is sent in the request body
  const newItem = req.body;
  data.push(newItem);
  res.json({ message: 'Data added successfully' });
});

// DELETE method to remove data
app.delete('/api/data/:index', (req, res) => {
  const index = req.params.index;
  if (index < data.length) {
    // Remove the item at the specified index
    const deletedItem = data.splice(index, 1);
    res.json({ message: `Data at index ${index} deleted`, deletedItem });
  } else {
    res.status(404).json({ error: 'Index out of range' });
  }
});

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
