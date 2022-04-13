const { cleanMessage } = require("./cleanMessage.js");
const { conversationData } = require("../arrays/conversationData.js");
const { randomFromArray } = require("./selectRandomFromArray.js");
const { wisdom } = require("../arrays/wisdom.js")


const generateReply = (message) => {
    let messageToReply = cleanMessage(message);
    let objectsPicked = [];
    let reply = "";
    conversationData.forEach(object => {
        object.patterns.forEach(pattern => {
            if (messageToReply === pattern) {
                objectsPicked.push(object.id)
            }
            else {
                // Se añaden espacios vacíos al final y comienzo del mensaje y luego se chequean que el último valor y el primero sean " ", esto es para conseguir exact match
                if (messageToReply[messageToReply.indexOf(pattern) + pattern.length] === " " && messageToReply[messageToReply.indexOf(pattern) + -1] === " " ) {
                    objectsPicked.push(object)
                }
            };
        });
    });

    objectsPicked = objectsPicked.sort((a, b) => {if(a.priority < b.priority) {return 1} else if (a.priority > b.priority) {return -1} else {return 0}})
    if (objectsPicked.length > 0) {
        reply = randomFromArray(objectsPicked[0].responses);
    }
    else {
        reply = randomFromArray(wisdom);
    }
return reply;
}

module.exports = { generateReply };