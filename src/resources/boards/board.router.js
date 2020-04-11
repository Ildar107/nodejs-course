const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const errorCatchWrapper = require('../../utils/errorCatchWrapper');
const { BAD_REQUEST, NOT_FOUND, OK, NO_CONTENT} = require('http-status-codes');


router.route('/').get(errorCatchWrapper(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(OK).json(boards);
}));

router.route('/').post(errorCatchWrapper(async (req, res) => {
  if(!req.body) {
    res.status(OK).send('Bad request');
    return;
  }
  const board = await boardsService.create(req.body);
  res.status(OK).json(board);
}));

router.route('/:id').get(errorCatchWrapper(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  if(board !== undefined)
    res.status(OK).json(board);
  else 
    res.status(NOT_FOUND).send('Board not found');
}));

router.route('/:id').put(errorCatchWrapper(async (req, res) => {
  if(!req.body) {
    res.status(BAD_REQUEST).send('Bad request');
    return;
  }
  await boardsService.updateBoard(req.params.id, req.body);
  res.status(OK).json('The board has been updated.');
}));

router.route('/:id').delete(errorCatchWrapper(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  if(board !== undefined)
    res.status(NO_CONTENT).send('The board has been deleted');
  else 
    res.status(NOT_FOUND).send('Board not found');
}));


module.exports = router;