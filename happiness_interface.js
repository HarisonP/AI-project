function happinessInterface() {
	var brain = require('brain'),
		net = new brain.NeuralNetwork();
		self = this;

	this.train = function(){
		net.train([{input: [0, 0], output: [0.01]},
           {input: [0, 1], output: [0.99]},
           {input: [1, 0], output: [0.32]},
           {input: [1, 1], output: [0.13]},
           {input: [1, 1], output: [0.72]}]);
	}

	this.evaluate = function(){
		var output = net.run([1, 0]);
		return output
	}
}

exports.happinessInterface = happinessInterface;

