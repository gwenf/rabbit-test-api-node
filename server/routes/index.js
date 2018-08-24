const express = require('express');
const router = new express.Router();

router.get('/students', require('./getStudents'));
router.post('/students', require('./addStudent'));

router.get('/students/:student_id', require('./getStudent'));
router.put('/students/:student_id', require('./updateStudent'));
router.delete('/students/:student_id', require('./deleteStudent'));

module.exports = router;

