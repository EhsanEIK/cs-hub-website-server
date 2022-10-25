const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('CS Server is running');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('cs server is running on port:', port);
})