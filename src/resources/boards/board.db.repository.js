const Board = require('./board.model');

const getAll = async () => {
    return Board.find({});
};

const create = async (board) => {
  return Board.create(board);
};

const getBoard = async (id) => {
    return Board.findOne({ id: id });
};

const updateBoard = async (id, board) => {
  return Board.updateOne( { id: id }, board);
};

const deleteBoard = async (id) => {
  return (await Board.deleteOne({ id: id })).deletedCount;
};

module.exports = { getAll, create, getBoard, updateBoard, deleteBoard };