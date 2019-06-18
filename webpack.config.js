const path = require('path');

module.exports = {
  entry: './src/Main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: ['electron'],
};