const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    }); 
})

client.on("message", async message => {
    const prefix = ".";

    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Arguments and command variable
    // cmd is the first word in the message, aka the command
    // args is an array of words after the command
    // !say hello I am a bot
    // cmd == say (because the prefix is sliced off)
    // args == ["hello", "I", "am", "a", "bot"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }
    
  /////////////////////////////////////////////////////////////////////////////////  
    
     if (cmd === "dev") {
        // Send a message
        const msg = await message.channel.send(`💿 Loading....`);

        // Edit the message
        msg.edit(`🛠 **Comming Soon** 🛠! \nA-Team`);
    }   
    
    
    /////////////////////////////////////////////////////////////////////////////////    


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
