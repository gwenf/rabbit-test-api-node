var q = 'tasks';
var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);

module.exports = function addStudent(req, res, next) {
  console.log('addStudent', req.body);

  // Publisher for RabbitMQ
  return open.then(function(conn) {
    var ok = conn.createChannel();
    ok = ok.then(function(ch) {
      ch.assertQueue(q);
      ch.sendToQueue(q, new Buffer('something to do'));
    });
    return ok;
  }).then(null, () => {
    console.warn
    return res.send(req.body);
  });
};

