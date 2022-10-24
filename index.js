const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('CS Server is running');
})

app.listen(port, () => {
    console.log('cs server is running on port:', port);
})