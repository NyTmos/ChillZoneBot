const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`); 
});

client.on('message', message => {
	console.log(message.content);
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'global-chat');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
