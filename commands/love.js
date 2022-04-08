const { SlashCommandBuilder } = require('@discordjs/builders');
const { love } = require("../arrays/loveFunction.js");
const { randomFromArray } = require('../functions/selectRandomFromArray');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('love')
        .setDescription('Loves a random user.')
        .addUserOption(option => option.setName('target').setDescription('Select a user to love instead')),
    async execute(interaction) {
        interaction.guild.members.fetch()
            .then(response => {
                let members = response.map(x => { return { name: x.user.username, isBot: x.user.bot } });
                let possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);
                
                const selectedUser = interaction.options.getUser('target');
                let lover = interaction.member.displayName;
                let reply = "";
                let target = "";
                let extra = "";


                if (selectedUser === null) {
                    possibleTargets = possibleTargets.filter(x => x !== interaction.member.displayName.toString())
                    target = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = love(lover, target, extra);
                }

                else if (selectedUser.username === interaction.member.displayName.toString()) {
                    reply = "You know, there are more fun ways to love yourself :wink:";
                }

                else if (selectedUser.bot === true) {
                    reply = `Bots may not be able to love, but they do it like a sex machine.`;
                }

                else {
                    target = selectedUser.username;
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = love(lover, target, extra);
                }

                interaction.reply({ content: reply });
            })
            .catch(console.error);
    }
};