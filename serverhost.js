// dê "npm install express" antes de rodar o script

const express = require('express');
const app = express();
const port = 1024;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/site.html');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
