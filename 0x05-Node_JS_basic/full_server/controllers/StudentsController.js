const readDatabase = require('../utils');

const path = 'database.csv';

class StudentController {
  static getAllStudents(request, response) {
    response.status(200);
    readDatabase(path).then((val) => {
      response.send(
        'This is the list of our students\n'
                + `Number of students in CS: ${val.CS.length}. List: ${val.CS.join(', ')}\n`
                + `Number of students in SWE: ${val.SWE.length}. List: ${val.SWE.join(', ')}`,
      );
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const majorList = ['CS', 'SWE'];
    response.status(200);
    const major = request.params && request.params.major;
    if (majorList.includes(major)) {
      readDatabase(path).then((val) => {
        response.send(`List: ${val[major].join(', ')}`);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentController;
