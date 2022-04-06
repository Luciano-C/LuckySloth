const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pongs'),
    async execute(interaction) {
        let lots_of_pongs = 10; 
        interaction.reply({ content: `${lots_of_pongs} pongs` })
    }
};
