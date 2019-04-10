const net = require('net');
const readline = require('readline');

//stdin/stdout strigger on echo
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});


const connectiontoserver = net.createConnection(8080, 'localhost', () => {
  console.log('am connected');
  rl.prompt();
  //below is a listener
  rl.on('line', line => {
    connectiontoserver.write(line);
    rl.prompt();
  });

  connectiontoserver.on('data', data => {
    rl.prompt();
  });

});
