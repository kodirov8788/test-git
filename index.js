const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.send('<h1 style="border:2px solid red">Hello World</h1>');
})

app.listen(5001, () => {
    console.log('Server is running on port 5001');
})