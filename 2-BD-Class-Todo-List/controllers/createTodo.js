///// import model
const Todo = require("../models/todoModel");

///// route handler
exports.createTodo = async (req, res) => {
    try {
        //// Extract title & description from req.body;
        const { title, description } = req.body;

        ///// Create a new Todo Obj & insert in DB
        const response = await Todo.create({ title, description });

        ///// Send JSON response with success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "List Added Successfully!!!"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message
        })
    }
}