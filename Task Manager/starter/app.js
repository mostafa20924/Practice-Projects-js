const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasksroutes');
const PORT = 3000;



// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API!');
});

app.use('/api/v1/tasks', tasksRouter); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
