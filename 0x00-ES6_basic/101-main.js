import createIteratorObject from './100-createIteratorObject';
import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';
import iterateThroughObject from './101-iterateThroughObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
