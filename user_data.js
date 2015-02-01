var PersonStatus = function(dayOfTheWeek, currentDate, season, timeOfDay, userAge, userGender,
                            socialSuccess, ageOfSender, genderOfSender, relationshipToSender,
                            happiness) {
    this.dayOfTheWeek         = dayOfTheWeek;
    this.currentDate          = currentDate;
    this.season               = season;
    this.timeOfDay            = timeOfDay;
    this.userAge              = userAge;
    this.userGender           = userGender;
    this.socialSuccess        = socialSuccess;

    this.ageOfSender          = ageOfSender;
    this.genderOfSender       = genderOfSender;
    this.relationshipToSender = relationshipToSender;

    this.happiness            = happiness;
}

PersonStatus.prototype.list_status = function() {
    return [ this.dayOfTheWeek,
             this.currentDate,
             this.season,
             this.timeOfDay,
             this.userAge,
             this.userGender,
             this.socialSuccess,
             this.ageOfSender,
             this.genderOfSender,
             this.relationshipToSender ];
};

