const path = require('path');

const srcDir = path.resolve(__dirname, '../../src');
const mocksDir = path.resolve(__dirname, './mocks');

module.exports = {
  moduleNameMapper: {
    "^src(.*)$": `${srcDir}$1`,
    // "\\.(scss|css|less)$": `${mocksDir}/styles.js`,
    "\\.(png)$": `${mocksDir}/image.js`,
  },
  roots: ['../../src'],
};

