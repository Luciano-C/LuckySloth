const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// Require the necessary discord.js classes
const { Client, Intents, Collection } = require('discord.js');

// server.js crea un servidor usando express. Este será monitoreado por uptimerobot
const { keepAlive } = require("./keepalive/server.js");

// Loading the token from .env file
const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env['TOKEN'];
const TEST_GUILD_ID = process.env['TEST_GUILD_ID'];


const myIntents = [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS];
// Create a new client instance
const client = new Client({
    intents: myIntents,
    partials: ["MESSAGE", "REACTION"],
    restRequestTimeout: 30000,
    restTimeOffileSystemet: 750,
    fetchAllMembers: true
});

// Loading commands from the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));




const commands = [];

// Creating a collection for commands in client
client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}



// When the client is ready, this only runs once
client.once('ready', () => {
    console.log('Ready!');
    // Registering the commands in the client
    const CLIENT_ID = client.user.id;
    const rest = new REST({
        version: '9'
    }).setToken(TOKEN);
    (async () => {
        try {
            if (!TEST_GUILD_ID) {
                await rest.put(
                    Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                },
                );
                console.log('Successfully registered application commands globally');
            } else {
                await rest.put(
                    Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
                    body: commands
                },
                );
                console.log('Successfully registered application commands for development guild');
            }
        } catch (error) {
            if (error) console.error(error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});


// Login to Discord with your client's token
keepAlive();
client.login(TOKEN);






