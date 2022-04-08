const { SlashCommandBuilder } = require('@discordjs/builders');
const { hit } = require("../arrays/hitFunction.js");
const { randomFromArray } = require('../functions/selectRandomFromArray');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hit')
        .setDescription('Hits a random user.')
        .addUserOption(option => option.setName('target').setDescription('Select someone to hit.'))
        .addUserOption(option => option.setName('hitter').setDescription('Select someone as hitter.')),
    async execute(interaction) {
        interaction.guild.members.fetch()
            .then(response => {
                let members = response.map(x => { return { name: x.user.username, isBot: x.user.bot } });
                let possibleTargets = members.filter(x => x.isBot === false).map(x => x.name);

                const selectedTarget = interaction.options.getUser('target');
                const selectedHitter = interaction.options.getUser('hitter');

                let hitter = "";
                let target = "";
                let extra = "";
                let reply = "";


                if (selectedTarget === null && selectedHitter === null) {
                    hitter = interaction.member.displayName.toString();
                    possibleTargets = possibleTargets.filter(x => x !== hitter);
                    target = randomFromArray(possibleTargets);
                    possibleTargets = possibleTargets.filter(x => x !== target);
                    extra = randomFromArray(possibleTargets);
                    reply = hit(hitter, target, extra);
                }

                else if (selectedTarget === null && selectedHitter !== null) {
                    if (selectedHitter.bot === false) {
                        hitter = selectedHitter.username;
                        possibleTargets = possibleTargets.filter(x => x !== hitter);
                        target = randomFromArray(possibleTargets);
                        possibleTargets = possibleTargets.filter(x => x !== target);
                        extra = randomFromArray(possibleTargets);
                        reply = hit(hitter, target, extra);
                    }
                    else {
                        reply = "You can't have bots doing your dirty work, pick another.";
                    };
                }

                else if (selectedTarget !== null && selectedHitter === null && selectedTarget.bot === false) {
                    if (selectedTarget.bot === false) {
                        hitter = interaction.member.displayName.toString();
                        target = selectedTarget.username;
                        possibleTargets = possibleTargets.filter(x => x !== target);
                        extra = randomFromArray(possibleTargets);
                        reply = hit(hitter, target, extra);
                    }
                    else {
                        hitter = "LuckySloth";
                        target = interaction.member.displayName.toString();
                        possibleTargets = possibleTargets.filter(x => x !== target);
                        extra = randomFromArray(possibleTargets);
                        reply = `Hitting bots is not cool.\n${hit(hitter, target, extra)}`;
                    }

                }


                else if (selectedTarget !== null && selectedHitter !== null) {
                    if (selectedTarget.bot === true && selectedHitter.bot === false) {
                        hitter = "LuckySloth";
                        target = interaction.member.displayName.toString();
                        possibleTargets = possibleTargets.filter(x => x !== target);
                        extra = randomFromArray(possibleTargets);
                        reply = `Hitting bots is not cool.\n${hit(hitter, target, extra)}`;
                    }

                    else if (selectedTarget.bot === true && selectedHitter.bot === true) {
                        reply = "What is it with you and bots? :face_with_raised_eyebrow:";
                    }

                    else if (selectedTarget.bot === false && selectedHitter.bot === true) {
                        reply = "You can't have bots doing your dirty work, pick another.";
                    }

                    else {
                        hitter = selectedHitter.username;
                        target = selectedTarget.username;
                        
                        if (hitter !== target) {
                            possibleTargets = possibleTargets.filter(x => x !== target && x !== hitter);
                            extra = randomFromArray(possibleTargets);
                            reply = hit(hitter, target, extra);
                        }
                        else {
                            reply = "Weird to see people hitting themselves :thinking:";
                        };
                    };
                };
                interaction.reply({ content: reply });
            })
            .catch(console.error);
    }
};

