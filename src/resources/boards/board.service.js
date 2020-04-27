const boardsRepo = require('./board.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const create = (board) => boardsRepo.create(board);

const getBoard = (id) => boardsRepo.getBoard(id);

const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);

const deleteBoard = async (id) => {
    const count = await boardsRepo.deleteBoard(id);
    if(count > 0) {
        await tasksService.deleteAllBoardTasks(id);
    }
    return count > 0;
}

module.exports = { getAll, create, getBoard, updateBoard, deleteBoard };
