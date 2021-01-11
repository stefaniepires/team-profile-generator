const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Austin', '5678', 'austin@email.com', 'github.com/austin', 'Engineer');
  
  expect(engineer.name).toBe('Austin');
  expect(engineer.id).toBe('5678');
  expect(engineer.email).toBe('austin@email.com');
  expect(engineer.github).toBe('github.com/austin');
  expect(engineer.role).toBe('Engineer');
});