const Sequelize = require('sequelize');

const sequelize = new Sequelize('student_management', 'gzepeda', 'postgres', {
  dialect: 'postgres'
});

const models = {
  Student: sequelize.import('./student')
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

