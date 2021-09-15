const express = require('express');
const app = express();
const port = 3000;

const arr = ['bobby', 'peter'];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  res.send('sdlkfjghs kljghdfjklghdf lg dg');
});

app.get('/users', (req, res) => {
  res.json(arr);
});

app.post('/users', (req, res) => {
  arr.push('John');

  res.json(arr);
});

app.delete('/users', (req, res) => {
  arr.pop();

  res.json(arr);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
