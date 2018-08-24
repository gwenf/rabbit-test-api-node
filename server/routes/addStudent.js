const models = require('../models');

var q = 'tasks';

var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);

module.exports = function addStudent(req, res, next) {
  console.log('addStudent', req.body);
  models.Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    honor_roll: req.body.honor_roll
  })
    .then((student) => {
      // Publisher for rabbit
      open.then(function(conn) {
        var ok = conn.createChannel();
        ok = ok.then(function(ch) {
          ch.assertQueue(q);
          ch.sendToQueue(q, new Buffer('something to do'));
        });
        return ok;
      }).then(null, () => {
        console.warn
        res.send(student);
      );
    });
};

