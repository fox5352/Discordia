const { main } = require('./main.js'); // Adjust the path accordingly
const { readConfig } = require("./utils/")

describe("tests the util functions", () => {
  test('readConfig test', async () => {
    const data = await readConfig("./config.json")

    expect(main).not.toThrow();
  });
  
});

describe('Testing main function', () => {
  test('Main function runs without errors', () => {
    // Call the main function and expect it not to throw an error
    expect(main).not.toThrow();
  });
});

