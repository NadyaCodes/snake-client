const net = require("net");

// establishes a connection with the game server


const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected!")
    conn.write('Name: SNK');
  })

  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = {
  connect,
}



// console.log("Connecting ...");
// connect();



// const net = require("net");

// // const credentials = {
// //   host: 'localhost', //IP address
// //   port: 50541// PORT number
// // }
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost', // IP address here,
//     port: 50541 // PORT number here,
//   });



// // const connect = function() {
// //   const conn = net.createConnection(credentials);

//   conn.setEncoding("utf8");

  // conn.on("connect", () => {
  //   console.log("Successfuly connected to server")
  //   conn.write('Name: SNK');
  //   conn.write('Move: up');
  // })
  


// //   conn.on("data", (data) => {
// //     console.log(data);
    
// //   });


//   return conn;

// };



