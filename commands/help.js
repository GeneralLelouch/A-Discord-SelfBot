const settings = require("../settings.json");

exports.run = (client, message, params) => {
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => math.max(long, str.length), 0);
  message.channel.send(`**==Command List==**\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});

};

exports.help = {
  name: 'help',
  description: 'Display\'s all the available coomands',
  usage: 'help [command]'
};
