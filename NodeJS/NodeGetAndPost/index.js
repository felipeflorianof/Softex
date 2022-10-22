const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Homapage of the project')
});

app.get('/about', (req, res) => {
    res.send('about me:');
});

app.post('/signup', (req, res) => {
    res.send('Here is the page that will receive data from the form with the method="POST"');
});

app.listen(8080, () => {
    console.log('try this: http://Localhost:8080');
});