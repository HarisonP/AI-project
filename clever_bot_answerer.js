var Cleverbot = require('cleverbot-node');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ai');
var sentence = mongoose.Schema({
    sentence: String,
    answers: Object, 
    happinessLevels: Array,
});
var Sentence = mongoose.model('Sentence', sentence);


function  cleverBotInterface() {
	var self = this;
	var answerer = new Cleverbot;

	this.setHappiness = function (happynessValue, callback){
		callback(true);
	}

	this.think = function(stimulator, happiness,callback){
		
		var normalStimulator = normalize(stimulator);

		if(Math.random() < 0.5){
			happiness = parseFloat(happiness) + Math.random() * 0.2;
		}else{
			happiness = parseFloat(happiness) - Math.random() * 0.2;
		}

		Sentence.findOne({'sentence':normalStimulator}).exec(function(err, answerObj){
			var seekOutSideHelp = true;
			var nearest = -1;
			var indexForInsert = -1;

			// console.log(answerObj);
			if(answerObj){
				seekOutSideHelp = false;
				
				var data = findNearest(answerObj.happinessLevels,happiness);
				nearest = data.value;
				indexForInsert = data.indexForInsert;

				var nearestAnswerIndex = nearest.toString().replace('.','');

				if(Math.abs( nearest - answerObj.answers[nearestAnswerIndex]) <= 0.2){
					
					if(nearest == answerObj.answers[nearestAnswerIndex] ){
						callback(answerObj.answers[nearestAnswerIndex]);
					}

					if(Math.random() > 0.1){
						callback(answerObj.answers[nearestAnswerIndex]);
					}else{
						seekOutSideHelp = true;
					}
					
				}else{
					if(Math.random() < 0.4){
						callback(answerObj.answers[nearestAnswerIndex]);
					}else{
						seekOutSideHelp = true;
					}
				}
			}

			if(seekOutSideHelp){
				self.setHappiness(happiness,function(success){
					
					answerer.write(normalStimulator, function (answer) {
						if(answerObj){
							happiness.toString().replace('.','')
							var newOBj = JSON.parse(JSON.stringify(answerObj.answers));
							newOBj[happiness.toString().replace('.','')]  = answer.message;

							answerObj.answers = newOBj;
							answerObj.happinessLevels.splice(indexForInsert, 0, happiness);

							
							answerObj.save(function(err, saved){
								// console.log(err, saved);
							});
						}else{
							
							var answers = {};
							answers[happiness.toString().replace('.','')] = answer.message;
							
							var trainingSentence = new Sentence({sentence:normalStimulator.replace('\n','').replace('\r',''), answers:answers, happinessLevels:[happiness]});
							
							trainingSentence.save(function(err){
								if(err){
									// console.log(err);
								}
							});
						}
						callback(answer.message);
					});
				});
			}
			//callback(':)');
		});
		
	}

	function normalize(sentence){
		sentence = sentence.toLowerCase();
		sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
		
		return sentence.replace('\n','').replace('\r','');
	}

}
function findNearest(array, value){
	var nearest = array[0];
	if(array[0] > value ){
		return {value: array[0], index:0};
	}
	for(var i = 0; i < array.length - 1; i++){
		if(array[i] < value && value < array[i + 1] ){
			var distanceToTheLower = Math.abs(array[i] - value);
			var distanceToTheUpper = Math.abs(array[i + 1] - value);
			if(distanceToTheLower < distanceToTheUpper){
				return {value: array[i], indexForInsert:i + 1};
			}else{
				return {value: array[i + 1], indexForInsert:i + 1}
			}
		}
	}
	return {value: array[array.length -1], indexForInsert:array.length};	
}
exports.cleverBotInterface = cleverBotInterface;