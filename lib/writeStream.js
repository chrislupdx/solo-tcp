const fs = require('fs');

const ws = fs.createWriteStream('./dog.json', {
  encoding: 'utf8',
  flags: 'a',
});

ws.write('\n\t');
ws.write('{');
ws.write('name: "Dog", ');
ws.write('\n\t');
ws.write('species: "human", ');
ws.write('\n\t');
ws.write('food: "babies" ');
ws.write('};');
ws.write('\n\n\t');
// var person = { name: 'John', age: 31, city: 'New York' };
ws.end();
