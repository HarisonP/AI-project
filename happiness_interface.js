function happinessInterface() {
	var brain = require('brain'),
		net = new brain.NeuralNetwork();
		self = this;

	var userDataHelper = require('./user_data');
	var personObject = userDataHelper.PersonStatus
	var dataForTraining = userDataHelper.dataForTraining;
	this.train = function(iters){
		net.train(dataForTraining,{
					  errorThresh: 0.005,  // error threshold to reach
					  iterations: 20000,   // maximum training iterations
					  learningRate: 0.3    // learning rate
					});
	}

	this.evaluate = function(senderInfo,relationshipToSender ){
		var now = new Date();
		var userInfo = require('./usersInfo.json');
		var data = {season: getSeason(now.getMonth()),
					dayOfTheWeek: now.getDay(), 
					currentDate:now.getDate(),
					// timeOfDay: now.getTime(),
					userAge: userInfo.userAge,
					userGender: userInfo.userGender,
					socialSuccess: userInfo.socialSuccess,
					ageOfSender: senderInfo.ageOfSender, 
					genderOfSender: senderInfo.genderOfSender, 
					relationshipToSender: relationshipToSender
					}
		var personStatus = new personObject(data)
		
		var output = net.run(personStatus.listInRunFormat());
		return output;
	}
	this.evaluateForWeb = function(userInfo,senderInfo,timeInfo,relationshipToSender ){
		var now = new Date();

		var season = timeInfo.season|| getSeason(now.getMonth());

		var dayOfTheWeek = timeInfo.dayOfTheWeek || now.getDay();
		
		var currentDate = timeInfo.currentDate || now.getDate()
		
		var data = {season: parseInt(season) ,
					dayOfTheWeek: parseInt(dayOfTheWeek), 
					currentDate: parseInt(currentDate),
					// timeOfDay: now.getTime(),
					userAge: parseInt(userInfo.userAge),
					userGender: parseInt(userInfo.userGender),
					socialSuccess: parseInt(userInfo.socialSuccess),
					ageOfSender: parseInt(senderInfo.ageOfSender), 
					genderOfSender: parseInt(senderInfo.genderOfSender), 
					relationshipToSender: parseInt(relationshipToSender)
					}
		var personStatus = new personObject(data)
		
		var output = net.run(personStatus.listInRunFormat());
		
		return output;
	}
}


function getSeason(month) {
	var season = -1;
    switch(month) {
        case '12':
        case '1':
        case '2':
            season = 0;
        break;
        case '3':
        case '4':
        case '5':
            season = 1;
        break;
        case '6':
        case '7':
        case '8':
            season = 2;
        break;
        case '9':
        case '10': 
        case '11':
            season = 3;
        break;
    }
   return season;
}

exports.happinessInterface = happinessInterface;

