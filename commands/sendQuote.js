const { SlashCommandBuilder } = require('@discordjs/builders');
const {randomFromArray}   = require("../functions/selectRandomFromArray.js")
const { quotes } = require("../arrays/quotes.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Sends a random quote')
        .addIntegerOption(option => option.setName('int').setDescription(`Enter a number of the quote to choose it (1 - ${quotes.length})`)),
    async execute(interaction) {
        const quoteNumber = interaction.options.getInteger('int');
        if (quoteNumber > 0 && quoteNumber <= quotes.length && quoteNumber !== null) {
            let reply = quotes[quoteNumber -1];
            interaction.reply({ content: reply })
        }
        else if ((quoteNumber <= 0 || quoteNumber > quotes.length) && quoteNumber !== null) {
            let reply = "That's a poopie number. No quote for you."
            interaction.reply({ content: reply })
        } 
        else {
            let reply = randomFromArray(quotes);
            interaction.reply({ content: reply })
        }             
    }
};