const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pongs'),
    async execute(interaction) {
        let lots_of_pongs = 10;
        let members = interaction.guild.members.fetch()
            .then(console.log)
            .catch(console.error);
        console.log(members);
        interaction.reply({ content: `${lots_of_pongs} pongs` })
    }
};
