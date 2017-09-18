const Discord = require('discord.js');
const moment = require('moment');
const info = require('../util/info.json')
require('moment-duration-format');

exports.run = (client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const author = info.author;
  const version = info.version;
  const user = message.author;
  const embed = new Discord.RichEmbed()
  .setTile('Some Useful Bot Statistics')
  .setAuthor(`${user.username} ${version}`, `${user.avatarURL}`)
  .setColor([255, 165, 0])
  .setFooter(`A Simple Discord Selfbot Written in Discord.js`)
  .setThumbnail(`${user.avatarURL}`)
  .setTimestamp()
  .addField('**Author**', `${author}`)
  .addField('**Uptime**', `${duration}`)
  .addField('**Memory Usage**', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField('**User\'s**', `${client.users.size.toLocaleString()}`)
  .addField('**Server\'s**', `${client.guild.size.toLocaleString()}`)
  .addField('**Channel\'s**', `${client.channels.size.toLocaleString()}`)
  .addField('**Discord.js**', `v${Discord.version}`)
  .addField('**Node Version**', `${process.version}`)
  .addField('**Source Code**', `**[Click Here](https://github.com/TherealPOKEGAMER/A-Discord-SelfBot) to get to the github link**`)

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'stats',
  description: 'Gives some info on the selfbot',
  usage: 'stats'
};
