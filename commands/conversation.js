const { SlashCommandBuilder } = require('@discordjs/builders');
const { generateReply } = require("../functions/generateReply.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('conversation')
        .setDescription('Chat with LuckySloth, he won\'t reveal your secrets.')
        .addStringOption(option => option.setName('message').setDescription('Enter a message').setRequired(true)),
    async execute(interaction) {
        let message = interaction.options.getString('message');
        let reply = generateReply(message)

        interaction.reply({ content: reply })
    }
};