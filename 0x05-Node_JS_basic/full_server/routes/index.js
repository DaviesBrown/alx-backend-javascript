const StudentController = require("../controllers/StudentsController");
const express = require("express");

const router = express.Router();

router.get("/", AppController.getHomePage());
router.get("/students", StudentController);
router.get("/students:major", StudentController);
