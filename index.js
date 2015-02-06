var answerer = require('./clever_bot_answerer');
var cleverBotInterface = new answerer.cleverBotInterface();
var happinessLib = require('./happiness_interface')
var happinessInterface = new happinessLib.happinessInterface();

process.stdin.resume();
process.stdin.setEncoding('utf8');
var fs = require('fs');
var userInfo = {userGender:0, socialSuccess: 6, userAge:21}
fs.writeFile('./usersInfo.json', JSON.stringify(userInfo));
console.log('Me:');

happinessInterface.train();
var sendersInfo = {ageOfSender: 21, genderOfSender:1, relationshipToSender:0}
process.stdin.on('data', function (text) {
		cleverBotInterface.think(text,happinessInterface.evaluate(sendersInfo, 0).happiness, function(answer){
			console.log('\nFacebook User: ' + answer);
			console.log('Me:');
			process.stdin.resume();
		});
	
});



