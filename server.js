const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.static('public'));

app.get('/api/talks', (req, res) => {
  fs.readFile('talks.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading talks data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
