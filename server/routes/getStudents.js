const models = require('../models');

module.exports = function getStudents(req, res, next) {
  console.log('getStudents');
  models.Student.findAll()
    .then((students) => {
      res.send(students);
    });
};

