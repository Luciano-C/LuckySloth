const { SlashCommandBuilder } = require('@discordjs/builders');
const { randomFromArray } = require("../functions/selectRandomFromArray.js")
const { wisdom } = require("../arrays/wisdom.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wisdom')
        .setDescription('Shares some wisdom.'),
    async execute(interaction) {
        let reply = randomFromArray(wisdom);
        interaction.reply({ content: reply })
    }
};