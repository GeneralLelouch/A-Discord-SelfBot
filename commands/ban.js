exports.run = (client, message, args) => {
  let user = message.mentions.users.first();

  if (!message.guild.member(user).bannable) return message.reply('Cannot Ban That user');
  message.guild.ban(user, 2);

  message.channel.send(`Succesfully Banned ${user.tag}`)
};

exports.help = {
  name: 'ban',
  description: 'Ban\'s the Mentioned User',
  usage:'ban [mention]'
};
