const express = require('express');
const router = new express.Router();

router.post('/students', require('./addStudent'));

module.exports = router;

