const Task = require('../models/TaskSchema');
const getAllTasks = (req, res) => {
    res.send('List of tasks will be here.');
};


const createTask = async (req, res) => {
    try {
        const { name, completed } = req.body;
        const newTask = new Task({ name, completed });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(400).json({ message: 'Error creating task', error });
    }
};

const getTask = (req, res) => {
    const { id } = req.params;
    res.send(`Get task with ID: ${id}`);
};

const updateTask = (req, res) => {
    const { id } = req.params;
    res.send(`Update task with ID: ${id}`);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    res.send(`Delete task with ID: ${id}`);
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};