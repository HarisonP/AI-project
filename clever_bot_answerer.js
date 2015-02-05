var Cleverbot = require('cleverbot-node');

function  cleverBotInterface() {
	var self = this;
	var answerer = new Cleverbot;
	this.setHappiness = function (happynessValue, callback){
		callback(true);
	}

	this.think = function(stimulator,callback){
		
		answerer.write(stimulator, function (answer) {
			callback(answer.message);
		});
	}

}

exports.cleverBotInterface = cleverBotInterface;