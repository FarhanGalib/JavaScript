const mongoose = require("mongoose");
const validator = require("validator");
const color = require("color");

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;