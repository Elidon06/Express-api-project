const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: 1, name: "Item 1", description: "Description for item 1" },
  { id: 2, name: "Item 2", description: "Description for item 2" }
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) return res.status(400).json({ error: 'Name and description are required' });
  const newItem = {
    id: items.length + 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name, description } = req.body;
  if (!name || !description) return res.status(400).json({ error: 'Name and description are required' });

  item.name = name;
  item.description = description;
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(index, 1);
  res.json({ message: 'Item deleted' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
