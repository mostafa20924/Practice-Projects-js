const Task = require('../models/TaskSchema');
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving tasks', error });
    }
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

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving task', error });
    }
};
   
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, { name, completed }, { new: true, runValidators: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        res.status(400).json({ message: 'Error updating task', error });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting task', error });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};