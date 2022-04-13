const net = require("net");

const credentials = {
  host: 'localhost', //IP address
  port: 50541// PORT number
}

const connect = function() {
  const conn = net.createConnection(credentials);

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });


  return conn;

};


console.log("Connecting...");
connect();


module.exports = {
  connect,
}