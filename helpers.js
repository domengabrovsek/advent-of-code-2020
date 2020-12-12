'use strict';

const fs = require('fs');

const readFile = (file) =>
  fs.readFileSync(file, { encoding: 'utf8' })
    .split('\n')
    .map(row => row.replace('\r', ''));

const sumItemsInArray = (array) => array.reduce((sum, item) => sum + item, 0);
const multiplyItemsInArray = (array) => array.reduce((product, item) => product * item, 1);

module.exports = {
  readFile,
  sumItemsInArray,
  multiplyItemsInArray
}