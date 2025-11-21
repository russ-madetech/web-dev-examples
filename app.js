const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.send('<h1>This is a webpage<h1>');  
});

app.get('/api/', (req, res) => {
  res.setHeader('content-type', 'text/json');
  res.send('{ "message": "This is some data" }');  
});

app.post('/thing', (req, res) => {
    res.send('Got it');  
 });

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});