var Cleverbot = require('cleverbot-node');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ai');
var sentence = mongoose.Schema({
    sentence: String,
    answers: Object, 
    happinessLevels: Array,
});
var Sentence = mongoose.model('Sentence', sentence)



function  cleverBotInterface() {
	var self = this;
	var answerer = new Cleverbot;
	var trainingData = require('./QandA.js').data;
	trainingData.forEach(function(singleSentence){
		var trainingSetntece = new Sentence({ 	sentence: singleSentence.sentence, 
			 									answers:singleSentence.answers, 
			 								 	happinessLevels:singleSentence.happinessLevels
			 								 });
		trainingSetntece.save(function(err,saved){
			if(err){
				console.log(err);
			}
		});
	});

	
	this.setHappiness = function (happynessValue, callback){
		callback(true);
	}

	this.think = function(stimulator, happiness,callback){
		
		var normalStimulator = normalize(stimulator);
		happiness = parseFloat(happiness) + Math.random() * 0.2;
		
		Sentence.findOne({'sentence':stimulator.replace('\n',"")}).exec(function(err, answerObj){
			var seekOutSideHelp = true;
			
			if(answerObj){
				seekOutSideHelp = false;
				console.log(answerObj);

				var nearest = findNearest(answerObj.happinessLevels,happiness);
				var nearestAnswerIndex = nearest.toString().replace('.','');

				if(Math.abs( nearest - answerObj.answers[nearestAnswerIndex]) <= 0.2){
					
					if(nearest == answerObj.answers[nearestAnswerIndex] ){
						callback(answerObj.answers[nearestAnswerIndex]);
					}

					if(Math.random() < 0.2){
						callback(answerObj.answers[nearestAnswerIndex]);
					}else{
						seekOutSideHelp = true;
					}
					
				}else{
					if(Math.random() < 0.5){
						callback(answerObj.answers[nearestAnswerIndex]);
					}else{
						seekOutSideHelp = true;
					}
				}
			}

			if(seekOutSideHelp){
				self.setHappiness(happiness,function(success){

					answerer.write(normalStimulator, function (answer) {
						callback(answer.message);
					});
				});
			}
		});
		
	}

	function normalize(sentence){
		sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
		
		if(['!', '?', '.'].indexOf(sentence.charAt(sentence.length - 2)) <  0){
			sentence += '.';
		}
		return sentence;
	}

}
function findNearest(array, value){
	var nearest = array[0];
	if(array[0] > value ){
		return array[0];
	}
	for(var i = 0; i < array.length - 1; i++){
		if(array[i] < value && value < array[i + 1] ){
			var distanceToTheLower = Math.abs(array[i] -value);
			var distanceToTheUpper = Math.abs(array[i + 1] -value);
			if(distanceToTheLower < distanceToTheUpper){
				return array[i];
			}else{
				return array[i + 1];
			}
		}
	}
	return array[array.length -1];	
}
exports.cleverBotInterface = cleverBotInterface;