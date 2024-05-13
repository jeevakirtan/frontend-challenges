const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'qr-code-component', 'build')));
app.use(express.static(path.join(__dirname, 'recipe-page', 'build')));

app.get('/qr-code-component', (req, res) => {
    res.sendFile(path.join(__dirname, 'qr-code-component', 'build', 'index.html'));
});

app.get('/recipe-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'recipe-page', 'build', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
  
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
    