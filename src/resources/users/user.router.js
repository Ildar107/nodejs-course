const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  if(!req.body || !req.body.password || !req.body.name || !req.body.login) {
    res.status(400).send('Bad request');
    return;
  }
  const user = await usersService.create(req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  if(user !== undefined)
    res.json(User.toResponse(user));
  else 
   res.json({ id: req.params.id });
})

router.route('/:id').put(async (req, res) => {
  if(!req.body || !req.body.password || !req.body.name || !req.body.login) {
    res.status(400).send('Bad request');
    return;
  }
  await usersService.updateUser(req.params.id, req.body);
  res.json('The user has been updated.');
})

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if(user !== undefined)
    res.status(204).send('The user has been deleted');
  else 
    res.status(404).send('User not found');
})

module.exports = router;
