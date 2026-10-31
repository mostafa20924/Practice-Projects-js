
const getAllTasks = (req, res) => {
    res.send('List of tasks will be here.');
};


const createTask = (req, res) => {
    res.send('Create a new task.');
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