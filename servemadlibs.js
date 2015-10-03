// Developed by Ballance.IT in a hurry on a Saturday morning
// Requires node, connect, serve-static

console.log('\033[2J');

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(1031);
console.log("Serving up mad libs at http://localhost:1031/");
