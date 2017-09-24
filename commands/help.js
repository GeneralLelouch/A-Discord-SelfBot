const Discord = require('discord.js');
const config = require('config.json');

exports.run = (client, message, params) => {
  if (!params[0]) {
    if (!args[0]) {
      const commandNames = Array.from(client.commands.keys());
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

      const embed = new Discord.RichEmbed()
      .setAuthor('List Of all Modules', message.author.avatarURL)
      .setColor([255, 0, 0])
      .setFooter('A simple Selfbot Made with Love (and Discord.js)')
      .setThumbnail(`${message.author.avatarURL}`)
      .setTimestamp()
      .addField("Fun", `\`\`\`${client.commands.filter(c=>c.help.module === "Fun").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Help", `\`\`\`${client.commands.filter(c=>c.help.module === "Help").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      .addField("Utility", `\`\`\`${client.commands.filter(c=>c.help.module === "Other").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``)
      message.channel.send({embed});
    } else {
      let command = args[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
      } else if (client.aliases.has(command)) {
        command = client.commands.get(client.aliases.get(command));
      } else {
        return message.reply("I can\'t Seem to find that command.")
      }
      const cmdhelp = new Discord.RichEmbed()
      .setColor([255, 0, 0])
      .setDescription(`\`${settings.prefix}${command.help.name} ${command.help.alias}\`\n${command.help.description}\n**${command.help.permit}**`)
      .addField(`Usage`, `\`${settings.prefix}${command.help.usage}\``)
      .setFooter(`Module: ${command.help.module}`)
      message.channel.send({embed: cmdhelp});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 4
};

exports.help = {
  name: 'help',
  description: 'Display\'s all command for your selfbot',
  usage: 'help [command]',
  module: 'Help'
};
