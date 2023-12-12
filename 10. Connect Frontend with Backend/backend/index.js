import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  {
    id: 1,
    title: 'First joke',
    content: 'This is first joke'
  },
  {
    id: 2,
    title: 'Second joke',
    content: 'This is second joke'
  },
  {
    id: 3,
    title: 'Third joke',
    content: 'This is third joke'
  },
  {
    id: 4,
    title: 'Fourth joke',
    content: 'This is fourth joke'
  },
  {
    id: 5,
    title: 'Fifth joke',
    content: 'This is fifth joke'
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to Jokes API');
});

app.get('/api/v1/jokes', (req, res) => {
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});