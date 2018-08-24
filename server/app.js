const express = require('express');
const app = express();
const routes = require('./routes');
const models = require('./models');
const bodyParser = require('body-parser');

const port = process.env.NODE_ENV || '4000';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use('/api/', routes);

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running at port ${port}`);
  });
});

