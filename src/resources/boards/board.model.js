const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid
    },
    title: String,
    columns: [{
    title: String,
    order: Number,
    id: {
      type: String,
      default: uuid
    }
    }]
  },
  { versionKey: false }
);

const Board =  mongoose.model('Board', boardSchema);

module.exports = Board;