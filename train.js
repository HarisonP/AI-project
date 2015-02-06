var mongoose = require('mongoose');
var _ = require('underscore');


var sentence = mongoose.Schema({
    sentence: String,
    answers: Object, 
    happinessLevels: Array,
});
var Sentence = mongoose.model('Sentence', sentence);

function trainWithReadyData(){
	
	var trainingData = require('./QandA.js').data;
	console.log(trainingData);
	var callback = _.after(trainingData.length - 1, function(){
		mongoose.connection.close();
	});
	mongoose.connect('mongodb://localhost:27017/ai',function(err){
		console.log(err);
		trainingData.forEach(function(singleSentence){
				var trainingSentence = new Sentence({ 	sentence: singleSentence.sentence, 
					 									answers:singleSentence.answers, 
					 								 	happinessLevels:singleSentence.happinessLevels
					 								 });
				trainingSentence.save(function(err,saved){
					if(err){
						console.log(err);
					}
					callback();
				});

		});
	});
}

trainWithReadyData();
