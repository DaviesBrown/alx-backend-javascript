const fs = require('fs');
const readline = require('readline');


module.exports = function countStudents(path) {
  const stream = fs.createReadStream(path);
  const reader = readline.createInterface({ input: stream });

  let data = [];
  reader.on('error', () => {
    throw new Error('Cannot load the database');
  });

  reader.on('line', (row) => {
    if (row) data.push(row.split(','));
  });

  function getField(data) {
    const fields = [...new Set(data.map((e) => e[3]))];
    return fields;
  }
  function getFieldCount(field) {
    const fieldc = data.filter((e) => e[3] === field);
    return fieldc.length;
  }
  function getNames(field, data) {
    const fieldn = data.filter((e) => e[3] === field);
    return fieldn.map((e) => e[0]);
  }
  reader.on('close', () => {
    data = data.slice(1);
    console.log('Number of students:', data.length);
    const fields = getField(data);
    fields.map((e) => {
      const nameList = getNames(e, data).join(', ');
      console.log(`Number of students in ${e}: ${getFieldCount(e)}. List: ${nameList}`);
      return fields;
    });
  });
};
