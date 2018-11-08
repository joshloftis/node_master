/*
* Primary file for the API
*
*/

const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');
const exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');

// Declare the app
const app = {};

// Init function
app.init = function() {
  // Start the server
  debugger;
  server.init();
  debugger;
  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(function() {
    cli.init();
  }, 50);
  debugger;

  // Call the init script that will throw
  debugger;
  exampleDebuggingProblem.init();
  console.log('Just called the example library');
  debugger;
};

// Execute
app.init();

// Export the app
module.exports = app;