// Load the http module to create an http server.
var http = require('http');
var express = require('express')
var https = require('https');
var fs = require('fs');
var app = express();

var answerer = new require('./clever_bot_answerer');
var cleverBotInterface = new answerer.cleverBotInterface();

var happinessLib = require('./happiness_interface')
var happinessInterface = new happinessLib.happinessInterface();
happinessInterface.train();


// This line is from the Node.js HTTPS documentation.
// var options = {
//   key: fs.readFileSync('./0497daeb-2e8b-4405-872e-101bb4c41130.private.pem'),
//   cert: fs.readFileSync('./0497daeb-2e8b-4405-872e-101bb4c41130.public.pem')
// };
 

// To enable HTTPS
app.get('/', function (req, res) {
	
	var message = req.query.message;
	var sendersInfo = {ageOfSender: 21, genderOfSender:1, relationshipToSender:0}
  	
	cleverBotInterface.setHappiness(happinessInterface.evaluate(sendersInfo, 0),function(success){
		if(success){
			cleverBotInterface.think(message,function(answer){
 				res.send(answer)
			});
		}
   	
	})
});

app.get('/happinessLevels/', function (req, res) {
	console.log(req.query);
	res.send(happinessInterface.evaluateForWeb(req.query.userInfo, req.query.sendersInfo,req.query.timeInfo, req.query.relationshipToSender));
})

// Create an HTTP service.
http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(443);


 
// app.listen(80);
// $.get('http://localhost:3000/happinessLevels', {timeInfo:{season: 1, dayOfTheWeek: 6, currentDate:14}, userInfo:{userGender:0,socialSuccess:6,userAge:21},sendersInfo:{ageOfSender: 21, genderOfSender:1},relationshipToSender:0},function(resp){console.log(resp);});