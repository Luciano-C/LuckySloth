const { SlashCommandBuilder } = require('@discordjs/builders');
const { hit } = require("../arrays/hitFunction.js");
const { randomFromArray } = require('../functions/selectRandomFromArray');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hit')
        .setDescription('Hits a random user.')
        .addUserOption(option => option.setName('target').setDescription('Select a user to hit instead')),
    async execute(interaction) {
        interaction.guild.members.fetch()
            .then(response => {
                let members = response.map(x => { return { name: x.user.username, isBot: x.user.bot } });
                let possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);
                
                const selectedUser = interaction.options.getUser('target');
                let hitter = interaction.member.displayName;
                let reply = "";
                let target = "";
                let extra = "";


                if (selectedUser === null) {
                    possibleTargets = possibleTargets.filter(x => x !== interaction.member.displayName.toString())
                    target = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = hit(hitter, target, extra);
                }

                else if (selectedUser.username === interaction.member.displayName.toString()) {
                    reply = "Why are you hitting yourself? :rolling_eyes:";
                }

                else if (selectedUser.bot === true) {
                    hitter = "LuckySloth";
                    target = interaction.member.displayName.toString();
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = `Hitting bots is not cool.\n${hit(hitter, target, extra)}`;
                }

                else {
                    target = selectedUser.username;
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = hit(hitter, target, extra);
                }

                interaction.reply({ content: reply });
            })
            .catch(console.error);
    }
};

