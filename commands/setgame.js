exports.run = (client, message, args) => {
  message.delete();
  client.user.setGame(message.content.split(' ').slice(1).join(" "))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Set\'s your gaming status',
  usage: 'setgame [game name]',
  module: 'Utility'
};
