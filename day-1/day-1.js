/*

--- Part One ---
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?

*/

const input = require('./input.json');

const findTwoEntries = (input, num) => {
  for (let i = 0; i < input.length; i++) {
    const a = input[i];
    for (let j = 0; j < input.length - i; j++) {
      const b = input[j];
      const sum = a + b;
      if (sum === num) {
        return [a, b];
      }
    }
  }
}

const findThreeEntries = (input, num) => {
  for (let i = 0; i < input.length; i++) {
    const a = input[i];
    const diff = num - a;
    const result = findTwoEntries(input, diff);
    if (result) {
      return [a, ...result];
    }
  }
}

// first part
const entries1 = findTwoEntries(input, 2020);
const result1 = entries1[0] * entries1[1];
console.log(`${entries1[0]} * ${entries1[1]} = ${result1}`);

// second part
const entries2 = findThreeEntries(input, 2020);
const result2 = entries2[0] * entries2[1] * entries2[2];
console.log(`${entries2[0]} * ${entries2[1]} * ${entries2[2]} = ${result2}`);


