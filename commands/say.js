exports.run = (client, message, args) => {

const color = [0xF44336, 0x4CAF50, 0x2196F3, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x03A9F4, 0x00BCD4, 0x009688, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x000000, 0xFFFFFF]
var random = Math.floor(Math.random()*color.length);
const Discord = require ("discord.js");
const embed = new Discord.RichEmbed()
.setColor(color[random])
.setDescription(message.content.split(" ").slice(1).join(" "))
message.channel.send({embed});
setTimeout(() => {message.delete()}, 1);
};

exports.help = {
  name: 'say',
  description: "Say's Whatever you want in embed",
  usage: 'say [whatever you want]'
};
