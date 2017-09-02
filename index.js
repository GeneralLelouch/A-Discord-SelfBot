const Discord = require('discord.js');
const client = new Discord.Client();
const pre = require("./settings.json");
const prefix = pre.prefix;
const userid = pre.userid;
let args = message.content.split(" ");
const command = args.shift().slice(prefix.length);
client.login(process.env.TOKEN)

if (message.content.startsWith(prefix)){
  if (message.author.id !== 'userid') return;
  {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
};

process.on("unhandledRejection", err => {
    console.log(err.stack);
});
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));
