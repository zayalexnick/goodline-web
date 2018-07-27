const path = require('path');

module.exports = require(path.resolve('webpack', `webpack.${process.env.NODE_ENV}.config`));