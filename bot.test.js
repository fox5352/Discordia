const { main } = require('./main.js'); // Adjust the path accordingly

describe('Testing main function', () => {
  test('Main function runs without errors', () => {
    // Call the main function and expect it not to throw an error
    expect(main).not.toThrow();
  });
});

