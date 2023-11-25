const express = require("express");
const countStudents = require("./3-read_file_async");

const app = express();
const database = process.argv[2];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
    countStudents(database).then(val => {
        let result = val;
        const responseObject = val //JSON.parse(result);
        const final = {
          totalStudents: responseObject.numOfStudent,
          csStudentsCount: responseObject.CS.split(",").length,
          sweStudentsCount: responseObject.SWE.split(",").length,
          csStudentsList: responseObject.CS,
          sweStudentsList: responseObject.SWE,
        };
        res.send(
            `This is the list of our students
  Number of students: ${final.totalStudents}\n`
            + `Number of students in CS: ${final.csStudentsCount}. List: ${final.csStudentsList}\n`
            + `Number of students in SWE: ${final.sweStudentsCount}. List: ${final.sweStudentsList}`,
          )
    });
});

app.listen(1245);

module.exports = app;
