'use strict';

const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input-test.txt`, { encoding: 'utf8' })
  .split('\n')
  .map(x => x
    .replace('\r', '')
    .replace(/bags|bag|\.|,|\d/g, '')
    .replace(/\s\s+/g, ' ')
    .replace(/[ ]+$/, '')
  );

const getOuterBag = (input) => {
  return input.replace(/[ ]+$/, '');
}

const getInnerBags = (input) => {
  const innerBagsArray = input.split(' ').filter(x => x);
  const innerBags = innerBagsArray.map((item, index) => {
    if (index % 2 === 0) {
      return `${innerBagsArray[index]} ${innerBagsArray[index + 1]}`
    }
  }).filter(x => x);

  return innerBags;
}

const parse = (input) => {

  const graph = {};

  input.forEach(row => {

    const parts = row.split('contain');
    const outerBag = getOuterBag(parts[0]);
    const innerBags = getInnerBags(parts[1]);

    if (!graph[outerBag]) {
      graph[outerBag] = [];
      innerBags.forEach(innerBag => {
        if (innerBag !== 'no other') {
          graph[outerBag].push(innerBag);
        }
      })
    }
  });

  return graph;
}

const graph = parse(input);

const results = [];
const searchQuery = 'shiny gold';

Object.keys(graph).forEach(key => {
  if (graph[key].includes(searchQuery)) {
    results.push(key);
  }
})

console.log(graph)
console.log(results);
