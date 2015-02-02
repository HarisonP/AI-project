// Load the http module to create an http server.
var http = require('http');
var express = require('express')
var https = require('https');
var fs = require('fs');
var app = express()

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('./0497daeb-2e8b-4405-872e-101bb4c41130.private.pem'),
  cert: fs.readFileSync('./0497daeb-2e8b-4405-872e-101bb4c41130.public.pem')
};
 

// To enable HTTPS
app.get('/', function (req, res) {
	var answerer = new require('./clever_bot_answerer');
	var cleverBotInterface = new answerer.cleverBotInterface();
	var message = req.query.message;
   	cleverBotInterface.think(message,function(answer){
 		res.send(answer)
	});
 	
});

// Create an HTTP service.
http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);


 
// app.listen(80);
