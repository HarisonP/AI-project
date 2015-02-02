
var answerer = require('./clever_bot_answerer');
var cleverBotInterface = new answerer.cleverBotInterface();
var happinessLib = require('./happiness_interface')
happinessInterface = new happinessLib.happinessInterface();
console.log(cleverBotInterface, happinessInterface);

process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('Me:')
  process.stdin.on('data', function (text) {
  	
  	cleverBotInterface.think(text, function(answer){
    	console.log('\nFacebook User: ' + answer);
    	happinessInterface.train();
    	console.log(happinessInterface.evaluate());
    	console.log('Me:')
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

