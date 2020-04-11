const { PORT } = require('./common/config');
const app = require('./app');
const errorHandler = require('./utils/errorHandler');


app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

process.on('uncaughtException', errorHandler);

process.on('unhandledRejection', errorHandler);
