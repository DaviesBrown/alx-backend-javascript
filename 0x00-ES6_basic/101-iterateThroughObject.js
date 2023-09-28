export default function iterateThroughObject(reportWithIterator) {
  let employeesName = '';
  for (const item of reportWithIterator) {
    employeesName += `${item}|`;
  }

  return employeesName.slice(0, -1);
}
