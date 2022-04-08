const { SlashCommandBuilder } = require('@discordjs/builders');
const { love } = require("../arrays/loveFunction.js");
const { randomFromArray } = require('../functions/selectRandomFromArray');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('lovefest')
        .setDescription('Starts a lovefest.'),
    async execute(interaction) {
        interaction.guild.members.fetch()
            .then(response => {
                let members = response.map(x => { return { name: x.user.username, isBot: x.user.bot } });
                let possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);
                
                let lover = "";
                let reply = "";
                let target = "";
                let extra = "";

                for (let i = 0; i < 5; i++) {
                    lover = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== lover);
                    target = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);
                    reply = reply + love(lover, target, extra) + "\n" + "\n";
                };

                interaction.reply({ content: reply });
            })
            .catch(console.error);
    }
};