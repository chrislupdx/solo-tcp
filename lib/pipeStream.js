const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 64 * 1028
});

const ws = fs.createWriteStream('./sample.json', {
  encoding: 'utf8',
  flags: 'a',
});

rs.pipe(ws);
