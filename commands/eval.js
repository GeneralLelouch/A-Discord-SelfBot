exports.run = (client, message, args) => {
  const clean = text => {
if (typeof(text) === "string") {
return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
}else {
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
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title:'EVAL',
description:`**EVAL INPUT:**\n\`\`\`${code}\`\`\`\n\n**EVAL OUTPUT:**\n\`\`\`${clean(evaled)}\`\`\``
timestamp: new Date(),
footer: {
  icon_url: "https://goo.gl/PheEXw",
  text: "A Discord.js Selfbot"
}
}});
} catch (err) {
      message.channel.send({embed: {
      title:'EVAL ERROR',
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      }
      description:`**ERROR**\`\`\`xl\n${clean(err)}\n\`\`\``
      timestamp: new Date(),
      footer: {
        icon_url: "https://goo.gl/PheEXw",
        text: "A Discord.js Selfbot"
      }
      }});
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'eval',
  description: 'Evaluates basic strings of JS',
  usage: 'eval'
};
