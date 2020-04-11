const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const errorCatchWrapper = require('../../utils/errorCatchWrapper');
const { BAD_REQUEST, NOT_FOUND, OK, NO_CONTENT} = require('http-status-codes');

router.route('/').get(errorCatchWrapper(async (req, res) => {
  const users = await usersService.getAll();
  res.status(OK).json(users.map(User.toResponse));
}));

router.route('/').post(errorCatchWrapper(async (req, res, next) => {
  if(!req.body || !req.body.password || !req.body.name || !req.body.login) {
    res.status(BAD_REQUEST).send('Bad request');
    return;
  }
  const user = await usersService.create(req.body);
  res.status(OK).json(User.toResponse(user));
}));

router.route('/:id').get(errorCatchWrapper(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  if(user !== undefined)
    res.status(OK).json(User.toResponse(user));
  else 
   res.status(NOT_FOUND).json('User not found');
}))

router.route('/:id').put(errorCatchWrapper(async (req, res) => {
  if(!req.body || !req.body.password || !req.body.name || !req.body.login) {
    res.status(BAD_REQUEST).send('Bad request');
    return;
  }
  await usersService.updateUser(req.params.id, req.body);
  res.status(OK).json('The user has been updated.');
}))

router.route('/:id').delete(errorCatchWrapper(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if(user !== undefined)
    res.status(NO_CONTENT).send('The user has been deleted');
  else 
    res.status(NOT_FOUND).send('User not found');
}))

module.exports = router;
