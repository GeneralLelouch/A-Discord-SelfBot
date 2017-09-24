exports.run = (client, message, args) => {
  message.delete();
  client.user.setUsername(message.content.split(' ').slice(1).join(" "))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setname',
  description: 'Set\'s your username',
  usage: 'setname [name]',
  module: 'Utility'
};
