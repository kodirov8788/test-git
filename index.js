const express = require('express');


const app = express();

app.get('/api', (req, res) => {
    res.send('<h1 style="border:2px solid blue">Bye World</h1>');
})
app.get('/api2', (req, res) => {
    res.send('<h1 style="border:2px solid green">Salom Dunyo</h1>');
})
app.get('/api3', (req, res) => {
    res.send('<h1 style="border:2px solid red">Salom Dunyo</h1>');
})
app.get('/api4', (req, res) => {
    res.send('<h1 style="border:2px solid yellow">Salom va Dunyo</h1>');
})
app.listen(5001, () => {
    console.log('Server is running on port 5001');
})