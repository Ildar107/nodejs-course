const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');


router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  if(!req.body) {
    res.status(400).send('Bad request');
    return;
  }
  const board = await boardsService.create(req.body);
  res.json(board);
  //res.json('The board has been created.');
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  if(board !== undefined)
    res.json(board);
  else 
    res.status(404).send('Board not found');
})

router.route('/:id').put(async (req, res) => {
  if(!req.body) {
    res.status(400).send('Bad request');
    return;
  }
  await boardsService.updateBoard(req.params.id, req.body);
  res.json('The board has been updated.');
})

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  if(board !== undefined)
    res.status(204).send('The board has been deleted');
  else 
    res.status(404).send('Board not found');
})


module.exports = router;