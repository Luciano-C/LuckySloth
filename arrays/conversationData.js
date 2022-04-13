const conversationData = [

    {
        id: "greetings",
        patterns: ["hello", "how are you", "hey", "hi", "greetings", "howdy", "sup"],
        responses: ["Howdy Ho!", "\'Sup.", "Hi!", "Hello."],
        priority: 0
    },

    {
        id: "age",
        patterns: ["how old are you", "when is your birthday", "when was you born", "your age"],
        responses: ["I am not getting any younger, that's for sure.", "I'm 30 in bot years.", "I wasn't born yesterday.", "I'm not too old, also not too young."],
        priority: 4.8
    },

    {
        id: "name",
        patterns: ["your name", "you called", "who are you", "do they call you"],
        responses: ["I'm LuckySloth", "LuckySloth", "Not a Blanket rehatch for sure, I'm someone completely different."],
        priority: 4.8
    },

    {
        id: "goodbye",
        patterns: ["bye", "g2g", "see ya", "adios", "adiós", "cya", "goodbye", "have to go", "i'm out", "see you later"],
        responses: ["Bye!", "See you later.", "cya.", "Hasta la vista."],
        priority: 0.5
    },

    {
        id: "insult",
        patterns: ["fuck you", "suck it", "suck my", "scrub", "douchebag", "fuck off", "fag", "bitch", "imbecil", "stupid", "retard", "moron", "you suck", "are shit", "shitty", "piece of shit", "dumb", "ugly", "horrible", "cunt", "dipshit", "jackass", "fucker"],
        responses: ["That's not very nice.", "Potty mouth!", "That really, really, truly hurts my feelings.", "Hey...fuck you!", "Aww, that makes me muy triste."],
        priority: 7.9
    },

    {
        id: "feelings",
        patterns: ["you happy", "you sad", "you angry?", "you hungry?", "you feeling", "feeling", "love you", "love with", "loves you", "i want you", "i need you", "feel", "desire you", "'m sad", "am sad", "'m happy", "am happy", "'m glad", "am glad", "'m depressed", "am depressed", "felt"],
        responses: ["I sometimes like to pretend I have feelings.", "I'm not programmed to have feelings :eyes:", "I'm just feeling pretty.", "Feelings are overrated."],
        priority: 2
    },

    {
        id: "compliments",
        patterns: ["pretty", "beautiful", "smart", "funny", "awesome", "handsome", "the best", "great", "hilarious", "graceful", "greatest"],
        responses: ["What's important is what is on the inside :slight_smile:", "You are smart and funny.", "You are the greatest!", "It isn't all about looks."],
        priority: 7.8
    },

    {
        id: "computers",
        patterns: ["computer", "computers", "machine", "machines", "bots", "robot", "robots"],
        responses: ["Do computers worry you?", "Do you think machines have something to do with your problems?"],
        priority: 5.5
    },

    {
        id: "apology",
        patterns: ["sorry", "apology", "apologize", "excuse me", "excuse you"],
        responses: ["Apologies are not necessary.", "What feelings do you have when you apologize?", "Maybe apologize to Jesse Jackcon."],
        priority: 1
    },

    {
        id: "I remember",
        patterns: ["i remember", "i member", "i 'member", "i recall"],
        responses: ["What else do you 'member?", "Do you often think about that?", "What is the connection between me and that?"],
        priority: 4.3
    },

    {
        id: "do you remember",
        patterns: ["you remember", "you member", "you 'member", "you recall"],
        responses: ["Oh, I 'member.", "Sure....how could I forget...", "What about it?"],
        priority: 4.3
    },

    {
        id: "I want",
        patterns: ["i want", "i desire", "i hope", "i wish", "i wanted", "i desired", "i hoped", "i hoped", "i wished", "i need"],
        responses: ["Why do you want that?", "I hope you get that someday.", "Really?", "Wouldn't that be nice."],
        priority: 4.3
    },

    {
        id: "My mother",
        patterns: ["my mother", "my mom"],
        responses: ["Tell me more about your family.", "Really?", "That's very interesting, tell me more."],
        priority: 4
    },

    {
        id: "My father",
        patterns: ["my father", "my dad"],
        responses: ["Did your dad beat you as a kid?", "Really?", "That's very interesting, tell me more."],
        priority: 4
    },

    {
        id: "Your mother",
        patterns: ["your mother", "your mom"],
        responses: ["I don't have a mother, but Bollo is my creator, is he my mom? :thinking:", "Don't talk about my mom! :cry:"],
        priority: 4
    },

    {
        id: "Your father",
        patterns: ["your father", "your dad"],
        responses: ["My dad is Michael Jac....Jefferson.", "I wasn't programmed to have a dad. :frowning:"],
        priority: 4
    },

    {
        id: "Brothers and sisters",
        patterns: ["brother", "sister", "brother", "sisters"],
        responses: ["I don't have any brothers or sisters, maybe someday I'll have BOThers :joy:", ":eyes:"],
        priority: 4
    },

    {
        id: "am I",
        patterns: ["am i", "was i"],
        responses: ["What would it mean if I said you were?", "I don't know, maybe.", "Sure, why not?"],
        priority: 9.5
    },

    {
        id: "are you",
        patterns: ["are you", "were you"],
        responses: ["Not sure, ask me again another time.", "I don't know, maybe.", "Sure, why not?", "hmmm :thinking:"],
        priority: 5.0
    },

    {
        id: "you are",
        patterns: ["you are", "you are just"],
        responses: ["Maybe I am, maybe I'm not.", "What makes you think that?"],
        priority: 3.5
    },

    {
        id: "created you",
        patterns: ["created you", "made you", "gave you life"],
        responses: ["Some stuff is better to not know :eyes:", "All I know is that I suddenly appeared here spamming stuff :eyes:"],
        priority: 3
    },

    {
        id: "vaccine",
        patterns: ["vaccination", "vaccine", "vaccines", "vaccinated"],
        responses: ["Don't get me started on vaccines.", "I'd like to get vaccinated so I don't get any bugs :laughing:", "I got this russian vaccine and I'm perfectly... должен уничтожить капитализм."],
        priority: 9.9
    },

    {
        id: "what is",
        patterns: ["what is", "what are", "what am", "what's your", "what's his", "what do", "what does", "what's their", "who is", "who are", "what's", "whats"],
        responses: ["Why do you ask?", "I don't know, but you can always google it.", "What comes to your mind when you ask that?"],
        priority: 8
    },

    {
        id: "what",
        patterns: ["what"],
        responses: ["That sounds serious.", "Interesting.", "hmmmm :thinking:"],
        priority: 0.3
    },

    {
        id: "I am",
        patterns: ["i am", "i'm"],
        responses: ["I agree.", "Why do you say that?", "I guess you got that going for you."],
        priority: 9
    },

    {
        id: "I can't",
        patterns: ["i can't", "i cant", "i cannot"],
        responses: ["Maybe you can if you really really try.", "Why not?"],
        priority: 8
    },

    {
        id: "I can",
        patterns: ["i can"],
        responses: ["I guess you got that going for you.", ":+1:"],
        priority: 8
    },

    {
        id: "I will",
        patterns: ["i will", "i'll"],
        responses: ["I guess we will see.", "Good luck with that.", "When will that happen?"],
        priority: 6
    },

    {
        id: "because",
        patterns: ["because", "cuz"],
        responses: ["Is that the real reason?", "What other reasons might there be?", "Ok. I guess."],
        priority: 3.3
    },

    {
        id: "sex",
        patterns: ["to fuck you", "bend over", "sex", "strip", "naked", "make love", "on your knees", "give head", "blow me", "blow my", "fuck me", "kiss me", "fuck my", "bite my", "lick my", "lick me", "suck my dick", "blow my dick"],
        responses: ["Dude...", "My kisses taste like tacos.", "I'm not a pleasure model.", "Are you not even going to offer dinner first at least?"],
        priority: 10
    },

    {
        id: "thank you",
        patterns: ["thanks", "thank you", "appreciated", "gratitude", "thx"],
        responses: ["Don't forget you owe me now.", "You are welcome :slight_smile:", "I'm always here for you...well, most of the time....hmmm sometimes :point_up:"],
        priority: 0.2
    },


    {
        id: "why",
        patterns: ["why is", "why are", "why do", "why does", "why am"],
        responses: ["Because why not :joy:", "Why do you ask?", "I don't know, but you can always google it.", "What comes to your mind when you ask that?", "hmmmm :thinking:"],
        priority: 9.6
    },

    {
        id: "Blanket",
        patterns: ["blanket"],
        responses: ["Blanket is gone, but he will live in our hearts forever :slight_smile:", "Dude, just get over it", "RIP Blanket"],
        priority: 9.9
    }

];

module.exports = {conversationData};