const { SlashCommandBuilder } = require('@discordjs/builders');
const { hit } = require("../arrays/hitFunction.js");
const { randomFromArray } = require('../functions/selectRandomFromArray');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('brawl')
        .setDescription('Starts a big fight.'),
    async execute(interaction) {
        interaction.guild.members.fetch()
            .then(response => {
                let members = response.map(x => { return { name: x.user.username, isBot: x.user.bot } });
                let possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);
                
                let hitter = "";
                let reply = "";
                let target = "";
                let extra = "";

                for (let i = 0; i < 5; i++) {
                    hitter = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== hitter);
                    target = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);
                    reply = reply + hit(hitter, target, extra) + "\n" + "\n";
                };

                interaction.reply({ content: reply });
            })
            .catch(console.error);
    }
};