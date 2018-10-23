const path = require('path');
module.exports = {
    entry: {
      classes: './js/classes.js',
      index: './js/index.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
    },
    watch:true
  };