const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const tasksRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');
const logger = require('./logger/winston');
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes');
const { JWT_SECRET_KEY } = require('./common/config');



const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const checkToken = async (req, res, next) => {
  const token = req.headers['authorization'];
  if(token) {
    jwt.verify( token.split(' ')[1], JWT_SECRET_KEY, (err, decoded) => {
      if(err) {
        res.status(UNAUTHORIZED).send('Unauthorized request');
      } else {
        next();
      }
    })
  } else {
    res.status(UNAUTHORIZED).send('Unauthorized request');
  }
}

app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});
app.use((req,res, next) => {
  logger.info({
    url: req.originalUrl,
    params: req.body,
    body: req.body
  });
  next();
});
app.use('/login', loginRouter);
app.use('/users', checkToken, userRouter);
app.use('/boards', checkToken, boardRouter);
app.use('/boards/:boardId/tasks', checkToken, tasksRouter);
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send('Server error!');
});

module.exports = app;
