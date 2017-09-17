exports.run (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let member = message.mentions.members.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  let muterole = message.guild.roles.find('name', 'Muted');
  if (!modlog) return message.reply('I can\'t seem to find a mod-log').catch(console.error);
  if (!muterole) return message.reply('I can\'t seem to find the muted role \nIf your muted role has any other name, please name it **"Muted"**').catch(console.error);
  if (reason.length < 1) return message.reply('Please supply a reason for the mute').catch(console.error);
  if (message.mentions.user.size < 1) return message.reply('You must mention an user or put an client id to mute').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`**Action:** UnMute\n**Target:** ${user.tag}\n**Reason:** ${reason}\n**Moderator:** ${message.author.tag}`)
  .setThumbnail(message.author.avatar)

  if (member.roles.has(muterole.id)) {
    member.removeRole(muterole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    })
    .catch(e=>console.error("Cannot remeve muted role: " + e));
  }
};

exports.help = {
  name: 'unmute',
  description: 'unmutes the mentioned user',
  usage: 'unmute [mention] [reason]'
}