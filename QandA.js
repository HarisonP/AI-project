var data = [
    {
        sentence: "",
        answers: {"01":"", "025":"", "04":"", "055":"", "07":"", "085":""},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: 'Hi',
        answers: {'02':'What?','01':'I am not in the mood now, sory.','05':'Hi', '04':'Hello', '06':'Hi :)' , '065':'Hello'}, 
        happinessLevels: [0.1, 0.2, 0.4, 0.5, 0.6, 0.65],
    },

    {
        sentence: 'Hi!',
        answers: {'02':'What?','01':'I am not in the mood now, sory.','05':'Hi', '04':'Hello', '06':'Hi :)' , '065':'Hello'}, 
        happinessLevels: [0.1, 0.2, 0.4, 0.5, 0.6, 0.65],
    }, 
    
    {
        sentence: 'How are you',
        answers: {'02':'I have been better. ','01':'Bad.','05':'I am ok.', '04':'Ok.', '06':'Fine' , '065':'Fine thanks.'}, 
        happinessLevels: [0.1, 0.2, 0.4, 0.5, 0.6, 0.65],
    },

    {
        sentence: "What is your name",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What's your name",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Whats your name",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What are you called",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What is your name?",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What's your name?",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Whats your name?",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What are you called?",
        answers: {"01":"None of your business", "025":"It's a secret", "04":"Can't yo uread", "055":"If I tell you I'll have to kill you", "07":"My name is YourBusiness... NoneOf YourBusiness", "085":"You know ;)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: 'How are you?',
        answers: {'02':'I have been better. ','01':'Bad.','05':'I am ok.', '04':'Ok.', '06':'Fine' , '065':'Fine thanks.'}, 
        happinessLevels: [0.1, 0.2, 0.4, 0.5, 0.6, 0.65],
    },

    {
        sentence: 'How are ya?',
        answers: {'02':'I have been better. ','01':'Bad.','05':'I am ok.', '04':'Ok.', '06':'Fine' , '065':'Fine thanks.'}, 
        happinessLevels: [0.1, 0.2, 0.4, 0.5, 0.6, 0.65],
    },

    {
        sentence: "Hey",
        answers: {"01":"Hello", "025":"Hi", "04":"Hey", "055":"Hey, what's up?", "07":"Heeey, hows it going?", "085":"Hey you!!! :)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Hey!",
        answers: {"01":"Hello", "025":"Hi", "04":"Hey", "055":"Hey, what's up?", "07":"Heeey, hows it going?", "085":"Hey you!!! :)"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Hello",
        answers: {"01":"Good day.", "025":"Greetings.", "04":"Hello.", "055":"Hi", "07":"Hi there", "085":"Hey."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Hello there",
        answers: {"01":"Good day.", "025":"Greetings.", "04":"Hello.", "055":"Hi", "07":"Hi there", "085":"Hey."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Hi there",
        answers: {"01":"Good day.", "025":"Greetings.", "04":"Hello.", "055":"Hi", "07":"Hi there", "085":"Hey."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Hey there",
        answers: {"01":"Good day.", "025":"Greetings.", "04":"Hello.", "055":"Hi", "07":"Hi there", "085":"Hey."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How's it going",
        answers: {"01":"I've been better, how about you?", "025":"I've been worse, and how are you doing?", "04":"You know, same old, same old. And with you?", "055":"I'm not unwell, thank you. And youself?", "07":"Everythings alright. How about you?", "085":"I'm wonderful, and with you?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How's it going?",
        answers: {"01":"I've been better, how about you?", "025":"I've been worse, and how are you doing?", "04":"You know, same old, same old. And with you?", "055":"I'm not unwell, thank you. And youself?", "07":"Everythings alright. How about you?", "085":"I'm wonderful, and with you?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How are you doing",
        answers: {"01":"I've been better, how about you?", "025":"I've been worse, and how are you doing?", "04":"You know, same old, same old. And with you?", "055":"I'm not unwell, thank you. And youself?", "07":"Everythings alright. How about you?", "085":"I'm wonderful, and with you?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How are you doing?",
        answers: {"01":"I've been better, how about you?", "025":"I've been worse, and how are you doing?", "04":"You know, same old, same old. And with you?", "055":"I'm not unwell, thank you. And youself?", "07":"Everythings alright. How about you?", "085":"I'm wonderful, and with you?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I'm ok",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I'm fine",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Im fine",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Im doing well",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Im good",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I'm good",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I'm alright",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Im alright",
        answers: {"01":"Good.", "025":"That's good.", "04":"I'm glad to hear that.", "055":"Good, good. What can I help you with?", "07":"Glad to hear you are doing fine.", "085":"I'm happy to hear you are doing well."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I've been better",
        answers: {"01":"Too bad.", "025":"That's too bad.", "04":"Oh. Why?", "055":"I'm sorry to hear that. What can I help you with?", "07":"I hope everythin turns out fine.", "085":"I hope everythings ok. If there's anything I can do please tell me."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I'm sad",
        answers: {"01":"Too bad.", "025":"That's too bad.", "04":"Oh. Why?", "055":"I'm sorry to hear that. What can I help you with?", "07":"I hope everythin turns out fine.", "085":"I hope everythings ok. If there's anything I can do please tell me."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Im sad",
        answers: {"01":"Too bad.", "025":"That's too bad.", "04":"Oh. Why?", "055":"I'm sorry to hear that. What can I help you with?", "07":"I hope everythin turns out fine.", "085":"I hope everythings ok. If there's anything I can do please tell me."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Not too good",
        answers: {"01":"Too bad.", "025":"That's too bad.", "04":"Oh. Why?", "055":"I'm sorry to hear that. What can I help you with?", "07":"I hope everythin turns out fine.", "085":"I hope everythings ok. If there's anything I can do please tell me."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What time is it",
        answers: {"01":"It's half past google it", "025":"I'm certain there are better sources for such info", "04":"It seems as though you already HAVE internet in which to search for such information", "055":"Don't you have a watch/phone/someone around you?", "07":"Really... You're asking ME?", "085":"What does it matter? You're late anyway."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What time is it?",
        answers: {"01":"It's half past google it", "025":"I'm certain there are better sources for such info", "04":"It seems as though you already HAVE internet in which to search for such information", "055":"Don't you have a watch/phone/someone around you?", "07":"Really... You're asking ME?", "085":"What does it matter? You're late anyway."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go out for a beer",
        answers: {"01":"I'm not in the mood", "025":"Sorry, I'm not really in the mood", "04":"I don't know... Not really in the mood.", "055":"Is 'you know who' going to be there?", "07":"Yeah, I'm in.", "085":"YES! Let's do this!", "09":"Why bother with asking? Let's just go!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 0.9],
    },

    {
        sentence: "Wanna go out for a beer?",
        answers: {"01":"I'm not in the mood", "025":"Sorry, I'm not really in the mood", "04":"I don't know... Not really in the mood.", "055":"Is 'you know who' going to be there?", "07":"Yeah, I'm in.", "085":"YES! Let's do this!", "09":"Why bother with asking? Let's just go!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 0.9],
    },

    {
        sentence: "Wanna catch a movie",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna catch a movie?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go grab some food",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go grab some food?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go play football",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go play football?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go play basketball",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go play basketball?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go shoot some hoops",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go shoot some hoops?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go to the park",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go to the park?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go out",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go out?",
        answers: {"01":"I don't really wanna go out, sorry.", "025":"Nah, not today, sorry.", "04":"Meh, I don't know.", "055":"Yeah... why not...", "07":"Sure.", "085":"Yeah! Sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do the assignment from yesterday",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do the assignment from yesterday?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do your homework",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do your homework?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do the homework",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do the homework?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do the problems from yesterday",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you do the problems from yesterday?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to do it"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you have a special someone",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to find one"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you have a special someone?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to find one"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you have a boyfriend?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to find one"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you have a girlfriend?",
        answers: {"01":"No", "025":"No, I haven't gotten around to it yet", "04":"Nah, not yet", "055":"Meh, not yet... Maybe tomorrow", "07":"Nope, there's still time", "085":"Nah are you kidding, there's plenty of time to find one"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you see the game last night",
        answers: {"01":"Yes", "025":"Yup", "04":"Yeah, it was tight", "055":"Yeah, it was intense", "07":"Hell Yeah! It was fun!", "085":"What do you mean? You watched it with me! :D"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you see the game last night?",
        answers: {"01":"Yes", "025":"Yup", "04":"Yeah, it was tight", "055":"Yeah, it was intense", "07":"Hell Yeah! It was fun!", "085":"What do you mean? You watched it with me! :D"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you have fun last night",
        answers: {"01":"Yes", "025":"Yup", "04":"Yeah, it was tight", "055":"Yeah, it was intense", "07":"Hell Yeah! It was fun!", "085":"What do you mean? You were with me! :D"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Did you have fun last night?",
        answers: {"01":"Yes", "025":"Yup", "04":"Yeah, it was tight", "055":"Yeah, it was intense", "07":"Hell Yeah! It was fun!", "085":"What do you mean? You were with me! :D"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you have a hobby",
        answers: {"01":"Yes", "025":"Yup", "04":"Yeah, I enjoy travelling", "055":"Yeah, I love travelling. How about you?", "07":"I am a travel-maniac! And you?", "085":"Yes. I love travelling! It's a very relaxing activity. And how about you?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you have a hobby?",
        answers: {"01":"Yes", "025":"Yup", "04":"Yeah, I enjoy travelling", "055":"Yeah, I love travelling. How about you?", "07":"I am a travel-maniac! And you?", "085":"Yes. I love travelling! It's a very relaxing activity. And how about you?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What do you do",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What do you do for a living",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What is your job",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What is your profession",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Whats your profession",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What do you work as",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What do you do?",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What do you do for a living?",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What is your job?",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What is your profession?",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Whats your profession?",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "What do you work as?",
        answers: {"01":"Programmer", "025":"I work in IT", "04":"I'm a software developer", "055":"I write software. How about you?", "07":"I am a software developer. How about you?", "085":"I am a machine that converts caffeine into code. And your self?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },


    {
        sentence: "Great to meet you",
        answers: {"01":"Yeah, the same here.", "025":"Nice to meet you too.", "04":"Pleasure is all mine.", "055":"Like wise.", "085":"Its so nice to finally meet you!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Nice to finally meet you",
        answers: {"01":"Yeah, the same here.", "025":"Nice to meet you too.", "04":"Pleasure is all mine.", "055":"Like wise.", "085":"Its so nice to finally meet you!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Nice to meet you",
        answers: {"01":"Yeah, the same here.", "025":"Nice to meet you too.", "04":"Pleasure is all mine.", "055":"Like wise.", "085":"Its so nice to finally meet you!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Where are you from",
        answers: {"01":"Bulgaria.", "025":"Sofia.", "04":"I'm from Sofia,Bulgaria.", "055":"I'm from Sofia, the capital of Bulgaria", "07":"I'm from the capital city of Bulgaria, Sofia.", "085":"I'm from Sofia, Bulgaria. Where are you from?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Where do you live",
        answers: {"01":"Bulgaria.", "025":"Sofia.", "04":"I'm from Sofia,Bulgaria.", "055":"I'm from Sofia, the capital of Bulgaria", "07":"I'm from the capital city of Bulgaria, Sofia.", "085":"I'm from Sofia, Bulgaria. Where are you from?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How old are you",
        answers: {"01":"It's none of your business.", "025":"Why do you wish to know?", "04":"That is a private question.", "055":"It's not important how old I am.", "07":"Me? How about you? How old are you?", "085":"I don't know how to convert my age in human years."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How is the weather outside",
        answers: {"01":"Why are you bothering me with such questions? Go google it.", "025":"You should probably look out the window from time to time instead of asking me.", "04":"Meh.", "055":"Weather doesnt matter to me. So its probably nice.", "07":"It's ok.", "085":"It's good, no matter if its cold or warm."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How is the weather",
        answers: {"01":"Why are you bothering me with such questions? Go google it.", "025":"You should probably look out the window from time to time instead of asking me.", "04":"Meh.", "055":"Weather doesnt matter to me. So its probably nice.", "07":"It's ok.", "085":"It's good, no matter if its cold or warm."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How do I look",
        answers: {"01":"Don't ask.", "025":"I can't lie to you. Not very good.", "04":"You should probably do something about that hair.", "055":"You look ok.", "07":"You look good!", "085":"You look awesome!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go on a date",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go on a date",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go on a date with me",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go to a club tonight",
        answers: {"01":"No, I don't feel well.", "025":"No, I'm busy tonight.", "04":"I don't know, clubs aren't my thing.", "055":"Let me check my schedule and I'll get back to you on that.", "07":"Sure, why not?", "085":"Heck yeah, I do!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go to a club tonight",
        answers: {"01":"No, I don't feel well.", "025":"No, I'm busy tonight.", "04":"I don't know, clubs aren't my thing.", "055":"Let me check my schedule and I'll get back to you on that.", "07":"Sure, why not?", "085":"Heck yeah, I do!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go grab coffee",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go play LaserTag",
        answers: {"01":"Isn't that for kids?", "025":"Sounds exhausting.", "04":"Maybe.", "055":"Why not?", "07":"Sure.", "085":"That sounds awesome!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go play LaserTag",
        answers: {"01":"Isn't that for kids?", "025":"Sounds exhausting.", "04":"Maybe.", "055":"Why not?", "07":"Sure.", "085":"That sounds awesome!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go shopping",
        answers: {"01":"I'm broke, so no.", "025":"Tomorrow maybe.", "04":"When?", "055":"Sure.", "07":"Yeah.", "085":"Yeah, sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

        {
        sentence: "Where are you from?",
        answers: {"01":"Bulgaria.", "025":"Sofia.", "04":"I'm from Sofia,Bulgaria.", "055":"I'm from Sofia, the capital of Bulgaria", "07":"I'm from the capital city of Bulgaria, Sofia.", "085":"I'm from Sofia, Bulgaria. Where are you from?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Where do you live?",
        answers: {"01":"Bulgaria.", "025":"Sofia.", "04":"I'm from Sofia,Bulgaria.", "055":"I'm from Sofia, the capital of Bulgaria", "07":"I'm from the capital city of Bulgaria, Sofia.", "085":"I'm from Sofia, Bulgaria. Where are you from?"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How old are you?",
        answers: {"01":"It's none of your business.", "025":"Why do you wish to know?", "04":"That is a private question.", "055":"It's not important how old I am.", "07":"Me? How about you? How old are you?", "085":"I don't know how to convert my age in human years."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How is the weather outside?",
        answers: {"01":"Why are you bothering me with such questions? Go google it.", "025":"You should probably look out the window from time to time instead of asking me.", "04":"Meh.", "055":"Weather doesnt matter to me. So its probably nice.", "07":"It's ok.", "085":"It's good, no matter if its cold or warm."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How is the weather?",
        answers: {"01":"Why are you bothering me with such questions? Go google it.", "025":"You should probably look out the window from time to time instead of asking me.", "04":"Meh.", "055":"Weather doesnt matter to me. So its probably nice.", "07":"It's ok.", "085":"It's good, no matter if its cold or warm."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "How do I look?",
        answers: {"01":"Don't ask.", "025":"I can't lie to you. Not very good.", "04":"You should probably do something about that hair.", "055":"You look ok.", "07":"You look good!", "085":"You look awesome!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go on a date?",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go on a date?",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go on a date with me?",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go to a club tonight?",
        answers: {"01":"No, I don't feel well.", "025":"No, I'm busy tonight.", "04":"I don't know, clubs aren't my thing.", "055":"Let me check my schedule and I'll get back to you on that.", "07":"Sure, why not?", "085":"Heck yeah, I do!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go to a club tonight?",
        answers: {"01":"No, I don't feel well.", "025":"No, I'm busy tonight.", "04":"I don't know, clubs aren't my thing.", "055":"Let me check my schedule and I'll get back to you on that.", "07":"Sure, why not?", "085":"Heck yeah, I do!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go grab coffee?",
        answers: {"01":"Not particularly, no.", "025":"I'm not in the mood", "04":"Maybe.", "055":"Why not.", "07":"Sure!", "085":"Yeah, definitely!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Wanna go play LaserTag?",
        answers: {"01":"Isn't that for kids?", "025":"Sounds exhausting.", "04":"Maybe.", "055":"Why not?", "07":"Sure.", "085":"That sounds awesome!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go play LaserTag?",
        answers: {"01":"Isn't that for kids?", "025":"Sounds exhausting.", "04":"Maybe.", "055":"Why not?", "07":"Sure.", "085":"That sounds awesome!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Do you want to go shopping?",
        answers: {"01":"I'm broke, so no.", "025":"Tomorrow maybe.", "04":"When?", "055":"Sure.", "07":"Yeah.", "085":"Yeah, sounds fun!"},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Bye",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Good Bye",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "Bye Bye",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "See you later",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "See ya",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I'll talk to you soon",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

    {
        sentence: "I have to go",
        answers: {"01":"Bye", "025":"Good day.", "04":"Good Bye", "055":"I'll talk to you soon.", "07":"Have a nice day.", "085":"Have a nice day! I'll talk to you soon."},
        happinessLevels:[0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    },

]

exports.data = data;