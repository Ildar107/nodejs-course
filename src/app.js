const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
<<<<<<< HEAD
const boardRouter = require('./resources/boards/board.router');
const tasksRouter = require('./resources/tasks/task.router');
const logger = require('./logger/winston');
=======
>>>>>>> ee60976ee4afde3b2d74e4ec936dcd00a7a06e6e

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

<<<<<<< HEAD
app.use((req,res, next) => {
  logger.info({
    url: req.originalUrl,
    params: req.body,
    body: req.body
  });
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', tasksRouter);

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send('Server error!');
});
=======
app.use('/users', userRouter);
>>>>>>> ee60976ee4afde3b2d74e4ec936dcd00a7a06e6e

module.exports = app;
