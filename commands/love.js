const { SlashCommandBuilder } = require('@discordjs/builders');
const { love } = require("../arrays/loveFunction.js");
const { randomFromArray } = require('../functions/selectRandomFromArray');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('love')
        .setDescription('Loves a random user.')
        .addUserOption(option => option.setName('target').setDescription('Select someone to love.'))
        .addUserOption(option => option.setName('lover').setDescription('Select someone as lover.')),
    async execute(interaction) {
        interaction.guild.members.fetch()
            .then(response => {
                let members = response.map(x => { return { name: x.user.username, isBot: x.user.bot } });
                let possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);

                const selectedTarget = interaction.options.getUser('target');
                const selectedLover = interaction.options.getUser('lover');

                let lover = "";
                let target = "";
                let extra = "";
                let reply = "";


                if (selectedTarget === null && selectedLover === null) {
                    lover = interaction.member.displayName.toString();
                    possibleTargets = possibleTargets.filter(x => x !== lover);
                    target = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = love(lover, target, extra);
                }

                else if (selectedTarget === null && selectedLover !== null) {
                    if (selectedLover.bot === false) {
                        lover = selectedLover.username;
                        possibleTargets = possibleTargets.filter(x => x !== lover);
                        target = randomFromArray(possibleTargets);
                        possibleTargets = possibleTargets.filter(x => x !== target);
                        extra = randomFromArray(possibleTargets);
                        reply = love(lover, target, extra);
                    }
                    else {
                        reply = "Bots can't love, but they do it as a sex machine.";
                    };
                }

                else if (selectedTarget !== null && selectedLover === null) {
                    if (selectedTarget.bot === false) {
                        lover = interaction.member.displayName.toString();
                        target = selectedTarget.username;
                        possibleTargets = possibleTargets.filter(x => x !== target);
                        extra = randomFromArray(possibleTargets);
                        reply = love(lover, target, extra);
                    }
                    else {
                        reply = "Bots can't love, but they do it as a sex machine.";
                    }

                }

                else if (selectedTarget !== null && selectedLover !== null) {
                    if (selectedTarget.bot === true && selectedLover.bot === false) {
                        reply = "Bots can't love, but they do it as a sex machine.";
                    }

                    else if (selectedTarget.bot === true && selectedLover.bot === true) {
                        reply = "What is it with you and bots? :face_with_raised_eyebrow:";
                    }

                    else if (selectedTarget.bot === false && selectedLover.bot === true) {
                        reply = "Bots can't love, but they do it as a sex machine.";
                    }

                    else {
                        lover = selectedLover.username;
                        target = selectedTarget.username;
                        
                        if (lover !== target) {
                            possibleTargets = possibleTargets.filter(x => x !== target && x !== lover);
                            extra = randomFromArray(possibleTargets);
                            reply = love(lover, target, extra);
                        }
                        else {
                            reply = "There are more fun ways for people to love themselves :wink:";
                        };
                    };
                };
                interaction.reply({ content: reply });
            })
            .catch(console.error);
    }
};