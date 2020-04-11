const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const create = (data) => boardsRepo.create(data);

const getBoard = (id) => boardsRepo.getBoard(id);

const updateBoard = (id, data) => boardsRepo.updateBoard(id, data);

const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, create, getBoard, updateBoard, deleteBoard };
