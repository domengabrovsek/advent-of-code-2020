'use strict';

const { readFile } = require('../helpers');
const input = readFile(`${__dirname}\\input.txt`)
  .map(row => parseInt(row));

const { sumItemsInArray } = require('../helpers');

const getNumberCandidates = (numbers) => {

  if (numbers.length === 1) {
    return numbers;
  }

  let candidates = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      candidates.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(candidates);
}

const getSequenceCandidates = (numbers, result) => {

  let numbersToConsider = numbers;

  let sequences = [];

  for (let i = 0; i < numbersToConsider.length; i++) {
    let group = [];
    for (let number of numbersToConsider) {
      group.push(number);
      sequences.push([...group]);
    }
    numbersToConsider.shift();
  }

  return sequences;
}

const findInvalidNumber = (input) => {

  const n = 25;
  let preamble = input.slice(0, n);
  let numbers = input.slice(n, input.length)

  for (let number of numbers) {

    const candidates = getNumberCandidates(preamble);

    if (candidates.includes(number)) {
      preamble.shift();
      preamble.push(number);
    } else {
      return number;
    }
  }
}

const findSequence = (input, result) => {

  const sequenceCandidates = getSequenceCandidates(input, result);

  for (let candidate of sequenceCandidates) {
    const arraySum = sumItemsInArray(candidate);
    if (arraySum === result) {
      return candidate;
    }
  }
}

const findEncryptionWeakness = (sequence) => {

  const sortedSequence = sequence.sort((a, b) => a - b);
  const encryptionWeakness = sortedSequence[0] + sortedSequence[sortedSequence.length - 1];

  return encryptionWeakness;
}

const result = {
  partOne: findInvalidNumber(input),
  partTwo: findEncryptionWeakness(findSequence(input, findInvalidNumber(input)))
}

console.log(result); // { partOne: 41682220, partTwo: 5388976 }

module.exports = {
  getNumberCandidates
}
