// const { connect } = require("http2");
// const net = require("net");



let connection;

const handleUserInput = (key) => {
  console.log("key: ", key)

  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {;
    // console.log('Move: up');
    connection.write('Move: up')
  }

  if (key === 'a') {;
    // console.log('Move: left');
    connection.write('Move: left')
  }

  if (key === 's') {;
    // console.log('Move: down');
    connection.write('Move: down')
  }

  if (key === 'd') {;
    // console.log('Move: right');
    connection.write('Move: right')
  }

}


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput) ;
  return stdin;
};



// if (key === 'w') {
//   conn.write('Move: up');
// }

module.exports = { setupInput }