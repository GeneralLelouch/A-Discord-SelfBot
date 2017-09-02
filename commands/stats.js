const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel.send(`= STATISTICS =
  • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  • Users      :: ${client.users.size.toLocaleString()}
  • Servers    :: ${client.guilds.size.toLocaleString()}
  • Channels   :: ${client.channels.size.toLocaleString()}
  • Discord.js :: v${Discord.version}
  • Node       :: ${process.version}`, {code: "asciidoc"});
  };)
};

exports.help = {
  name: 'stats',
  description: 'Gives some stat\'s about Selfbot',
  usage: 'stats'
};
