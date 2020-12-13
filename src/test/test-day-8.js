'use strict';

const { expect } = require('chai');
const { switchCommand } = require('../day-8/index');

describe('tests for switchCommand() - day 8', () => {

  const testCases = [
    { command: "jmp +123", expectedResult: "nop +123" },
    { command: "jmp -123", expectedResult: "nop -123" },
    { command: "nop +123", expectedResult: "jmp +123" },
    { command: "nop -123", expectedResult: "jmp -123" }
  ]

  testCases.forEach(tc => {
    it(`command: ${tc.command}, expected result: ${tc.expectedResult} `, () => {
      const result = switchCommand(tc.command);
      expect(result).to.be.equal(tc.expectedResult);
    })

  })
});