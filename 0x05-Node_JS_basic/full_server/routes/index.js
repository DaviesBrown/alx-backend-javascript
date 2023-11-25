const express = require('express');
const AppController = require('../controllers/AppController');
const StudentController = require('../controllers/StudentsController');

const router = express.Router();
router.get('/', AppController.getHomePage);
router.get('/students', StudentController.getAllStudents);
router.get('/students/:major', StudentController.getAllStudentsByMajor);

module.exports = router;
