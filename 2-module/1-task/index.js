function sumSalary(salaries) {
  let result = 0;

  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && Number.isFinite(salaries[key])) {
      result += salaries[key];
    }
  }

  return result;
}
