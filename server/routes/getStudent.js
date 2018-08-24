const models = require('../models');

module.exports = function getStudent(req, res, next) {
  console.log('get student: ' + req.params.student_id);

  models.Student.findById(req.params.student_id)
    .then((student) => {
      res.send(student);
    });
};

