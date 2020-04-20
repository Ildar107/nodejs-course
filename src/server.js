<<<<<<< HEAD
const errorHandler = require('./utils/errorHandler');
process.on('uncaughtException', errorHandler);

process.on('unhandledRejection', errorHandler);

const { connectDB } = require('./db/db.client');
const { PORT } = require('./common/config');
const app = require('./app');


connectDB(() => { 
    app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});


=======
const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
>>>>>>> ee60976ee4afde3b2d74e4ec936dcd00a7a06e6e
