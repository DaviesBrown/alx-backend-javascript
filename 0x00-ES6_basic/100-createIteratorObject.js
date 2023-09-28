export default function createIteratorObject(report) {
  const arr = [];
  for (const person of Object.values(report.allEmployees)) {
    arr.push(...person);
  }
  return arr;
}
