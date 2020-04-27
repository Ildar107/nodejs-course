const router = require('express').Router();
const loginService = require('./login.service');
const errorCatchWrapper = require('../../utils/errorCatchWrapper');
const { BAD_REQUEST, OK, FORBIDDEN} = require('http-status-codes');
const User = require('../users/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');

router.route('/').post(errorCatchWrapper(async (req, res, next) => {
  if(!req.body || !req.body.login || !req.body.password) {
    res.status(BAD_REQUEST).send('Bad request');
    return;
  }
  const user = await loginService.getUser(req.body.login);
  if(user === null || bcrypt.compareSync(req.body.password, user.password)) {
      res.status(FORBIDDEN).send('Bad login/password combination.');
  } else {
      const payload = User.toPayload(user);
      const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 60 })
      res.json({token: token});
  }
}));

module.exports = router;