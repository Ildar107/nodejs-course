const database = require('../../db/bd');
const Board = require('./board.model');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return database.boards;
};

const create = async (data) => {
  const board = new Board(data);
  database.boards.push(board);
  return board;
};

const getBoard = async (id) => {
  const board = database.boards.find((x) => x.id === id);
  return board;
};

const updateBoard = async (id, data) => {
  const board = database.boards.find((x) => x.id === id);
  if(board) {
    board.id = data.id;
    board.title = data.title;
    board.columns = data.columns;
  }
  return board;
};

const deleteBoard = async (id) => {
  const board = database.boards.find((x) => x.id === id);
  if(board) {
    database.boards = database.boards.filter((x) => x.id !== id);
    database.tasks = database.tasks.filter((x) => x.boardId !== id);
  }
  return board;
};

module.exports = { getAll, create, getBoard, updateBoard, deleteBoard };