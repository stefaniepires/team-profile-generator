const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('Ruby', '1234', 'ruby@email.com');

  expect(employee.name).toBe('Ruby');
  expect(employee.id).toBe('1234');
  expect(employee.email).toBe('ruby@email.com');
});