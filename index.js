var answerer = require('./clever_bot_answerer');
var cleverBotInterface = new answerer.cleverBotInterface();
var happinessLib = require('./happiness_interface')
var happinessInterface = new happinessLib.happinessInterface();
console.log(cleverBotInterface, happinessInterface);

process.stdin.resume();
process.stdin.setEncoding('utf8');
var fs = require('fs');
var userInfo = {userGender:0, socialSuccess: 6, userAge:21}
fs.writeFile('./usersInfo.json', JSON.stringify(userInfo));
console.log('Me:')

happinessInterface.train();

process.stdin.on('data', function (text) {
	
	cleverBotInterface.think(text, function(answer){
  	console.log('\nFacebook User: ' + answer);
  	
    var sendersInfo = {ageOfSender: 21, genderOfSender:1, relationshipToSender:0}
  	
    console.log(happinessInterface.evaluate(sendersInfo, 0));
  	process.stdin.resume();
  });
});

// var net = new brain.NeuralNetwork();
// net.train([{input: [0, 0], output: [0.01]},
//            {input: [0, 1], output: [0.99]},
//            {input: [1, 0], output: [0.32]},
//            {input: [1, 1], output: [0.13]},
//            {input: [1, 1], output: [0.72]}]);

// var output = net.run([1, 0]);  // [0.987]
// console.log(output);

