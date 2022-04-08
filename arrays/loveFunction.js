const { randomFromArray } = require(`../functions/selectRandomFromArray.js`);

const love = (lover, target, extra) => {
    const love_list = [
        `${lover} thinks that ${target} is awesome.`,
        `${lover} gives ${target} a big hug.`,
        `${lover} loves ${target} :heart:`,
        `${lover} gently caresses ${target}'s face.`,
        `${lover} sends a flying kiss to ${target}.`,
        `${lover} takes ${target}'s hand and they walk together into the sunset.`,
        `${lover} gives ${target}'s feet a massage.`,
        `${lover} and ${target} made sweet love by the fire.`,
        `${lover} and ${target} melt affectionately in a warm embrace.`,
        `${lover} and ${target} decide to go on a cruise after feeling eachother's heartbeat.`,
        `After months of awkward glances, ${lover} decides to go and hug ${target} :hugging:`,
        `"Hugs are worth more than a thousand words", said ${lover} when embraced ${target}.`,
        `${lover} whispers into ${target}'s ear "I want you".`,
        `${lover} and ${extra} chinese finger cuffed ${target}.`,
        `${lover} asked for a strand of ${target}'s beautiful hair, for ${target} is the most beautiful creature in the land. ${lover} got three.`,
        `${lover} put their best outfit to impress ${target}. Unfortunately ${extra} was looking hotter and they went away together. Now, I realize this may not be the love story we wanted to hear but these things happen and are beautiful in a certain way.`,
        `${lover} sang a ballad at ${target}'s balcony. That was some terrible singing but the gesture was appreciated and now they are deeply in love.`,
        `${lover} and ${target} were ready to make sweet love, but some of ${lover}'s ...eeeer... parts.. wouldn't work so they watched some TV instead. Nothing wrong with that, right? I mean we have all been there sometimes, right?`,
        `${lover} donated some sea men to ${target}'s aquarium, how nice is that? All ${target} had to do was suck a hose for a few minutes.`
    ];
    return randomFromArray(love_list);
}

module.exports = { love };