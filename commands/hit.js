const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hit')
        .setDescription('Hits a random user'),
    async execute(interaction) {
        interaction.guild.members.fetch()    
        .then(response => {
              console.log([...response.values()])
              let members = response.map(x => x.user.username);
              interaction.reply({ content: `${members[0]}` });
            })
            .catch(console.error);        
    }
};

// Se tiene en members lista de nombres
// console.log muestra objeto completo, de ahí se pueden filtrar los bots.