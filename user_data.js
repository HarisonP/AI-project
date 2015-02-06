//PersonStatus Legend
// {     
//       season: [1..4],                //1-Winter, 2-Spring, 3-Summer, 4-Autumn
//       dayOfTheWeek: [1..7],          //1-Monday, 2-Tuesday, ..., 7-Sunday 
//       currentDate: [1..28/30/31],    //Days of the month
//       // timeOfDay: now.getTime(),   //Clock
//       userAge: --,                   //Recievers Age
//       userGender: {0,1},             //Recievers Gender - 0-Male, 1-Female
//       socialSuccess: [0..10],        //Recievers Social Status -
//                                      //0 - No friends, acquaintances, or colleagues
//                                      //10 - Very Popular, Lots of friends, acquaintances and colleagues
//       ageOfSender: --,               //Senders Age
//       genderOfSender: {0,1},         //Senders Gender - 0-Male, 1-Female
//       relationshipToSender: [0..10], //Relationship between Sender and Reciever -
//                                      //0 - Seen eachother once
//                                      //10 - Best Friends/Significant Other
//       happiness: [0..1],             //Happiness level at moment of above-listed circumstances - 
//                                      // 0 - Very unhappy - Extremely passive or uninterested response
//                                      // 1 - Very happy - Extremely joyfull/positive/engaging response
//}

function PersonStatus(info) {
    this.dayOfTheWeek         = info.dayOfTheWeek;
    this.currentDate          = info.currentDate;
    this.season               = info.season;
    // this.timeOfDay            = info.timeOfDay;
    this.userAge              = info.userAge;
    this.userGender           = info.userGender;
    this.socialSuccess        = info.socialSuccess;

    this.ageOfSender          = info.ageOfSender;
    this.genderOfSender       = info.genderOfSender;
    this.relationshipToSender = info.relationshipToSender;

    this.happiness            = info.happiness;
}

PersonStatus.prototype.listInTrainFormat = function() {
    return {input:{ dayOfTheWeek: this.dayOfTheWeek,
             currentDate: this.currentDate,
             season: this.season,
             // this.timeOfDay,
             userAge: this.userAge,
             userGender: this.userGender,
             socialSuccess: this.socialSuccess,
             ageOfSender: this.ageOfSender,
             genderOfSender: this.genderOfSender,
             relationshipToSender: this.relationshipToSender },

             output:{happiness: this.happiness} };
};
PersonStatus.prototype.listInRunFormat = function() {
    return { dayOfTheWeek: this.dayOfTheWeek,
             currentDate: this.currentDate,
             season: this.season,
             // this.timeOfDay,
             userAge: this.userAge,
             userGender: this.userGender,
             socialSuccess: this.socialSuccess,
             ageOfSender: this.ageOfSender,
             genderOfSender: this.genderOfSender,
             relationshipToSender: this.relationshipToSender };
}
var data = require('./user_interaction_records').data;
var dataForTraining = [];
data.forEach(function(row){
    var newPersonStatus = new PersonStatus(row);
    dataForTraining.push(newPersonStatus.listInTrainFormat())
});


exports.PersonStatus = PersonStatus;
exports.dataForTraining = dataForTraining;

