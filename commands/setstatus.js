exports.run = (client, message, args) => {
  message.delete();
  client.user.setStatus(message.content.split(' ').slice(1).join(" "))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Set\'s your user status',
  usage: 'setstatus [online/idle/dnd/invinsible]',
  module: 'Utility'
};
