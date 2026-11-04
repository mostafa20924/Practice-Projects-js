const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasksroutes');
const connectDB = require('./database/conect');
require('dotenv').config(); // Load environment variables from .env file
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON requests 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API!');
});

app.use('/api/v1/tasks', tasksRouter); 


const startServer = async () => {
  try {
           await connectDB(process.env.MONGO_URI); // Use the MONGO_URI from .env file
            console.log('Connected to the database');

        app.on("error", (error) => {    // to check if there are any errors 
        console.log("ERROR", error);
        throw error;
    });
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
} catch (err) {
    console.log("MONGO db connection failed !!! ", err);
    
}
}

startServer();
