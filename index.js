// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`liguei meu parça`);
});

client.login(process.env.TOKEN);
