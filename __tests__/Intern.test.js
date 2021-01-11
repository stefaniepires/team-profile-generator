const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Canon', '2345', 'canon@email.com', 'University of IDK', 'Intern');
  
  expect(intern.name).toBe('Canon');
  expect(intern.id).toBe('2345');
  expect(intern.email).toBe('canon@email.com');
  expect(intern.school).toBe('University of IDK');
  expect(intern.role).toBe('Intern');
});