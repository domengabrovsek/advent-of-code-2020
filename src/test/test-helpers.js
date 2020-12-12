'use strict';

const { expect } = require('chai');
const { countCharsInString, sumItemsInArray, multiplyItemsInArray } = require('../helpers');

describe('tests for helper functions', () => {

  describe(' tests for multiplyItemsInArray()', () => {
    const testCases = [
      { array: [1], expectedResult: 1 },
      { array: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0], expectedResult: 0 },
      { array: [1, 2, 3, 4], expectedResult: 24 },
      { array: [1, -2, 3, 4], expectedResult: -24 },
      { array: [1, 2, 12312, 4], expectedResult: 98496 },
      { array: [1, 2, 3, 442142], expectedResult: 2652852 },
      { array: [1, 2, 3, -2, 0], expectedResult: 0 },
    ]

    testCases.forEach(tc => {
      it(`array: ${tc.array} ,expected result: ${tc.expectedResult} `, () => {
        const result = multiplyItemsInArray(tc.array);
        expect(result).to.be.equal(tc.expectedResult);
      })
    })
  })

  describe(' tests for sumItemsInArray()', () => {
    const testCases = [
      { array: [1], expectedResult: 1 },
      { array: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0], expectedResult: 6 },
      { array: [1, 2, 3, 4], expectedResult: 10 },
      { array: [1, 2, 3, 4], expectedResult: 10 },
      { array: [1, -2, 3, 4], expectedResult: 6 },
      { array: [1, 2, 12312, 4], expectedResult: 12319 },
      { array: [1, 2, 3, 442142], expectedResult: 442148 },
    ]

    testCases.forEach(tc => {
      it(`array: ${tc.array} ,expected result: ${tc.expectedResult} `, () => {
        const result = sumItemsInArray(tc.array);
        expect(result).to.be.equal(tc.expectedResult);
      })
    })
  })

  describe('tests for countCharsInString() ', () => {

    const testCases = [
      { string: "", char: "a", expectedResult: 0 },
      { string: "a", char: "a", expectedResult: 1 },
      { string: "aa", char: "a", expectedResult: 2 },
      { string: "aa", char: "b", expectedResult: 0 },
      { string: "aasbdaisdbasiudbasida", char: "a", expectedResult: 6 },
      { string: "12312asfa1212gdsdgfh", char: "a", expectedResult: 2 },
    ]

    testCases.forEach(tc => {
      it(`string: ${tc.string} char: ${tc.char}, expected result: ${tc.expectedResult} `, () => {
        const result = countCharsInString(tc.string, tc.char);
        expect(result).to.be.equal(tc.expectedResult);
      })
    })
  })
});