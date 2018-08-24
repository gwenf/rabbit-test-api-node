const Sequelize = require('sequelize');

let sequelize;

console.log('db url', process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: true,
    minConnections: 0
  });
} else {
  sequelize = new Sequelize('student_management', 'gzepeda', 'postgres', {
    dialect: 'postgres'
  });
}

const models = {
  Student: sequelize.import('./student')
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

