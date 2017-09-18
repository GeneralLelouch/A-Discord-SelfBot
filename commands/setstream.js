exports.run = (client, message, args) => {
  message.delete();
  client.user.setGame(message.content.split(' ').slice(1).join(" "), 'http://www.twitch.tv/logout')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setstream',
  description: 'Set\'s your game name as a stream',
  usage: 'setstream [stream name]'
};
