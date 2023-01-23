export default function createIteratorObject(report) {
  const emps = [];
  // for loop
  for (const dep of Object.keys(report.allEmployees)) {
    // nested for loop
    for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
