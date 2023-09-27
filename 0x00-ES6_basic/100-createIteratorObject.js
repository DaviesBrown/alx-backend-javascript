export default function createIteratorObject(report) {
    let arr = [];
    for (const person of Object.values(report.allEmployees)) {
        arr.push(...person);
    }
    return arr;
}
