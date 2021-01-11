const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
  const manager = new Manager('Ruby', '1234', 'Ruby@email.com', '4695671234', 'Manager');
  
  expect(manager.name).toBe('Ruby');
  expect(manager.id).toBe('1234');
  expect(manager.email).toBe('Ruby@email.com');
  expect(manager.phoneNumber).toBe('4695671234');
  expect(manager.role).toBe('Manager');
});