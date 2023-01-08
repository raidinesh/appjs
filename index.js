// Entry Point of the API Server

const express = require('express');
const config =require('./config/config.json')
const fs = require('fs');

/* Creates an Express application.
The express() function is a top-level
function exported by the express module.
*/
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
	user: config.user,
	host: config.host,
	database: config.database,
	password: config.password,
	dialect: config.dialect,
	port: config.port
});


/* To handle the HTTP Methods Body Parser
is used, Generally used to extract the
entire body portion of an incoming
request stream and exposes it on req.body
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
/*
pool.connect((err, client, release) => {
	if (err) {
		return console.error(
			'Error acquiring client', err.stack)
	}
	client.query('SELECT NOW()', (err, result) => {
		release()
		if (err) {
			return console.error(
				'Error executing query', err.stack)
		}
		console.log("Connected to Database !")
	})
})*/

app.post("/user", (req, res, next) => {
	console.log("User Data :",req.body);
  try {
    path ='./users/'+ req.body.user +'.txt'
	console.log("path is : ",path)
    fs.writeFileSync(path, JSON.stringify(req.body));
    // file written successfully
  } catch (err) {
    console.error(err);
  }
			res.send({"result":"ok"});
		
});
// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
	let host = server.address().address
	let port = server.address().port
	console.log("Listning at the url: http://127.0.0.1:3000")
})
