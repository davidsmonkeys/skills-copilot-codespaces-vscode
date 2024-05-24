// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the home page
app.get('/', (req, res) => {
    res.send('This is the home page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the home page
app.get('/', (req, res) => {
    res.send('This is the home page');
});

// Create a route for the comments page
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
