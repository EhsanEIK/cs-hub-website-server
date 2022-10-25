const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const courses = require('./data/courses.json');

app.use(cors());

// default route
app.get('/', (req, res) => {
    res.send('CS Server is running');
});

// get all courses api
app.get('/courses', (req, res) => {
    res.send(courses);
});

// get a single course api
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id === id);
    res.send(course);
});

app.listen(port, () => {
    console.log('cs server is running on port:', port);
});