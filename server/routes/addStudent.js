const models = require('../models');

module.exports = function addStudent(req, res, next) {
  console.log('addStudent', req.body);
  models.Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    honor_roll: req.body.honor_roll
  })
    .then((student) => {
      res.send(student);
    });
};

