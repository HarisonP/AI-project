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
var data = [{season: 1,
            dayOfTheWeek: 2, 
            currentDate:12,
            // timeOfDay: now.getTime(),
            userAge: 22,
            userGender: 0,
            socialSuccess: 5,
            ageOfSender: 22, 
            genderOfSender: 1, 
            relationshipToSender: 0,
            happiness: 0.3},

            {season: 2,
            dayOfTheWeek: 3, 
            currentDate:13,
            // timeOfDay: now.getTime(),
            userAge: 12,
            userGender: 1,
            socialSuccess: 3,
            ageOfSender: 35, 
            genderOfSender: 1, 
            relationshipToSender: 0,
            happiness: 0.7},

            {season: 3,
            dayOfTheWeek: 6, 
            currentDate:17,
            // timeOfDay: now.getTime(),
            userAge: 55,
            userGender: 1,
            socialSuccess: 9,
            ageOfSender: 35, 
            genderOfSender: 1, 
            relationshipToSender: 1,
            happiness: 0.99},

            {season: 3,
            dayOfTheWeek: 5, 
            currentDate:3,
            // timeOfDay: now.getTime(),
            userAge: 33,
            userGender: 0,
            socialSuccess: 5,
            ageOfSender: 35, 
            genderOfSender: 1, 
            relationshipToSender: 0,
            happiness: 0.5}
        ]
var dataForTraining = [];
data.forEach(function(row){
    var newPersonStatus = new PersonStatus(row);
    dataForTraining.push(newPersonStatus.listInTrainFormat())
});

exports.PersonStatus = PersonStatus;
exports.dataForTraining = dataForTraining;