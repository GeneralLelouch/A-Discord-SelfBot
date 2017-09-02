exports.run = (client, message, args) => {
  const Discord = require("discord.js");

  const clean = text => {
    if (typreof(text) === "string") {
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
    message.channel.send({embed: {
      color:3447003,
      title:'EVAL',
      description:`**EVAL INPUT:**\n\`\`\`${code}\`\`\`\n\n**EVAL OUTPUT:**\n\`\`\`${clean(evaled)}\`\`\``
    }});
  } catch (err) {
    message.channel.send({embed: {
      title:'EVAL ERROR',
      description:`**ERROR**\`\`\`xl\n${clean(err)}\n\`\`\``
    }});
  }
};

exports.help = {
  name: 'eval',
  description: 'Evaluates peice\'s of Javascript code \nP.S. I don\'t accept any responsibility if you eval stupid peices of code\'s and scream at me saying you made me a Userbot',
  usage: 'eval [...code]'
};
