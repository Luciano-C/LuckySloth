const { SlashCommandBuilder } = require('@discordjs/builders');
const {randomFromArray}   = require("../functions/selectRandomFromArray.js")
const { jokes } = require("../arrays/jokes.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Sends a random joke'),
    async execute(interaction) {
        let reply = randomFromArray(jokes);
        interaction.reply({ content: reply })
    }
};

