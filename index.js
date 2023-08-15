const express = require('express');
const app = express();
const port = 3000;

// Sample data
const todos = [
  { id: 1, text: 'Buy groceries' },
  { id: 2, text: 'Do laundry' },
];

// Route to get all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.use(express.json());

// Route to add a new todo
app.post('/todos', (req, res) => {
  console.log(req.body);
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});





