const net = require('net');
const server = net.createServer(connectedclient => {
  connectedclient.on('data', data => {
    connectedclient.write(data);
  });
});

server.listen(8080);
