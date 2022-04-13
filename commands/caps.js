const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('caps')
        .setDescription('Provides link for caps calculations.'),
    async execute(interaction) {
     
        interaction.reply({ content: "https://caps-website.bollo.repl.co/" })
    }
};
