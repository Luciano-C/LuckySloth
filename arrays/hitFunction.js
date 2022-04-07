const { randomFromArray } = require(`../functions/selectRandomFromArray.js`);

const hit = (hitter, target, extra) => {
    const hit_list = [
        `${hitter} kicks ${target} in the nuts.`,
        `${hitter} drops an anvil on ${target}'s head.`,
        `${hitter} yells \`Biiitch\` and slaps ${target}.`,
        `${hitter} hits ${target} with a pillow.`,
        `${hitter} grabs ${target} by the pussy.`,
        `${hitter} goes all Thor and hits ${target} with a hammer.`,
        `${hitter} hits ${target} with a chair in the back.`,
        `${hitter} threw ${target} off a cliff.`,
        `${target} gets crushed under a piano! :musical_keyboard:`,
        `${hitter} slaps ${target} with a large :eggplant:`,
        `${hitter} smacked ${target}'s mouth with an old newspaper :newspaper2:`,
        `${hitter} bitchslapped ${target} so hard than even their ancestors turned dizzy.`,
        `${hitter} combed ${target} with a rake.`,
        `${hitter} tagged ${extra} and they savagely clotheslined ${target}.`,
        `${hitter} added a powerful laxative to the beverage ${target} was drinking :poop:`,
        `${hitter} told ${target} they are ugly. No physical damage was done, but now ${target} is crying inside :smiling_face_with_tear:`,
        `${hitter} used ${target} as a battering ram to break down a castle door.`,
        `${hitter} knocks down ${target} with an uppercut and then spits on them on the floor.`,
        `${hitter} performed a fatality on ${target} :eyes:. Is it me or this thing is getting too violent? :thinking:`,
        `${hitter} sent ${target} on a one way ticket to the moon. Say hi to Willzyx! :hand_splayed:`,
        `${hitter} loaded a catapult with ${target} and fired it.`,
        `${hitter} challenged ${target} to a duel. Unfortunately ${hitter}'s pistol didn't fire and got killed....Tough luck I guess.`,
        `${hitter} electrocuted ${target}'s balls! :scream:`,
        `${hitter} shot ${target} in the dick. That's just not cool, I think ${hitter} owes ${target} an apology.`,
        `${hitter} gave AIDS to ${target}. Don't ask me how, but at least is not as bad as cancer.`,
        `${hitter} and ${target} played chess. ${hitter} lost and smashed the board on ${target}'s head. After the rage subsided ${hitter} said \`good game\` and politely asked for a rematch.`,
        `${hitter} and ${extra} sacrificed ${target} to the devil. Merry christmas, everybody! :rabbit: :fox: :bear: :deer:`, 
        `${target} slapped ${extra} for making fun of his wife. This is specially chivalrous, since ${target}'s wife has been naughty with ${hitter}.`
    ]
    return randomFromArray(hit_list);
}

module.exports = { hit };

