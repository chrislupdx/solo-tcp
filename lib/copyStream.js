const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 64 * 1028
});

const ws = fs.createWriteStream('./sample.json', {
  encoding: 'utf8',
  flags: 'a',
});

rs.on('data', data => {
  console.log('chunk', data);
});

rs.on('end', () => {
  console.log('end');
});
  

rs.on('data', data => {
  ws.write(data); 
  ws.end();
});

rs.on('end', () => {
  console.log('rs end');
});

//with pipe
