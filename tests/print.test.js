const printMe = require('../src/print');

test('Returns string', () => {
  expect(printMe('Banana')).toBe('Banana');
});

test('Returns string', () => {
  expect(printMe('Banana')).not.toBe('banana');
});
