const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid
    },
    title: String,
    order: Number,
    description: String,
    userId: {
      type: String,
      default: null
    },
    boardId: {
      type: String,
      default: null
    },
    columnId: {
      type: String,
      default: null
    },
  },
  { versionKey: false }
);

const Task =  mongoose.model('Task', taskSchema);

module.exports = Task;
