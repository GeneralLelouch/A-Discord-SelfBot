exports.run = (client, message, args) => {
  let user = message.users.mentions.first();

  if (!message.guild.member(user).kickable) return message.reply('Cannot kick that user');
  message.guild.kick(user);

  message.channel.send(`Succesfully Kicked ${user.tag}`)
};

exports.help = {
  name: 'kick',
  description: 'Kick\s the Mentioned user.',
  usage: 'kick [mention]'
};
