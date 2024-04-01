const fs = require('fs');


/**
 * Reads and parses a JSON file.
 * @param {string} path - The path to the file.
 * @returns {object} The data in the file.
 */
async function readConfig(path) {
  try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  
    return data
  } catch (error) {
    // If file not found create file
    if (error.code === 'ENOENT') {
      // TODO: create file
      const data = {
        schedule: {
          times: {
            start: '0 8 * * 1-5',
            end: '0 16 * * 1-5'
          },
          tasks: [],
          day: 0
        }
      }

      await writeConfig(data);

      return data
    } else {
      console.error('An unexpected error occurred:', error.message);
      // Handle other errors here
    }
  }
}

async function writeConfig(data) {
  try {
    fs.writeFileSync('./config.json', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  readConfig,
  writeConfig
}