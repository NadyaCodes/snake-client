const { setupInput } = require('./input.js')


//get function that makes a connection
const { connect } = require('./client.js')

//make a new connection
const newConnection = connect();

//call setupInput and give it this new connection
setupInput(newConnection);


