exports.run = (client, msg, args) => {
  msg.delete();
  msg.channel.send(":ping_pong:").then(m => m.edit(`:ping_pong: | Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  description: 'It... like... pings. Then Pongs. And it\'s not Ping Pong.',
  usage: 'ping'
};
