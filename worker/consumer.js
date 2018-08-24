var q = 'tasks';

var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);

console.log('consumer listening...');
open.then(function(conn) {
  var ok = conn.createChannel();
  ok = ok.then(function(ch) {
    ch.assertQueue(q);
    ch.consume(q, function(msg) {
      console.log('********* consumer message: ', msg);
      if (msg !== null) {
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  });
  return ok;
}).then(null, console.warn);

