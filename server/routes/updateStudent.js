const models = require('../models');

module.exports = function updateStudent(req, res, next) {
  console.log('updateStudent');
  models.Student.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    honor_roll: req.body.honor_roll
  }, {
    where: {
      id: req.params.student_id
    }
  })
    .then((student) => {
      res.send(student);
    });
};

