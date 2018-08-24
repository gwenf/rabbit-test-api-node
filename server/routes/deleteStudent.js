const models = require('../models');

module.exports = function deleteStudent(req, res, next) {
  console.log('deleteStudent', req.params.student_id);
  models.Student.destroy({
    where: {
      id: req.params.student_id
    }
  })
    .then(() => {
      res.send(`deleted student with id ${req.params.student_id}`);
    });
};

