exports.run = (client, message, args) => {
  message.delete();
  message.member.setNickname(message.content.split(' ').slice(1).join(" "))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setnick',
  description: 'Set\'s your nickname in the server [Note: Must have Change Nickname perms]',
  usage: 'setnick [nickname]'
};
