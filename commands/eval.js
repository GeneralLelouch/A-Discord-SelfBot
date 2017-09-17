const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const clean = text => {
    if (typeof(text) === 'string') {
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    } else {
      return text;
    }
  }
  try {
    const args = message.content.split(' ').slice(1);
    const code = args.join(' ');
    let evaled = eval(code);
    if (typeof evaled !== 'string')
    evaled = require('util').inspect(evaled);
    message.delete()
    const embed = new Discord.RichEmbed()
    .setTitle("**EVAL**")
    .setAuthor(`${message.author.username}`, `${message.author.avatarURl}`)
    .setDescription(`**EVAL INPUT:**\n\`\`\`${code}\`\`\`\n\n**EVAL OUTPUT:**\n\`\`\`${clean(evaled)}\`\`\``)
    .setColor(0x00AE86)
    .setFooter("A Discord.js Selfbot", "https://goo.gl/PheEXw")
    .setTimestamp()

    message.channel.send({embed});
  } catch (err) {
    const embed = new Discord.RichEmbed()
    .setTitle("EVAL ERROR")
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setDescription(`**ERROR**\`\`\`xl\n${clean(err)}\n\`\`\``)
    .setColor(0x00AE86)
    .setFooter("A Discord.js Selfbot", "https://goo.gl/PheEXw")
    .setTimestamp()

    message.channel.send({embed});
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Evaluates basic strings of JS',
  usage: 'eval'
};
