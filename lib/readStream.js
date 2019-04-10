const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 64 * 1028
});

let body = '';

rs.on('data', data => {
});

rs.on('end', () => {
});
