exports.run = (client, message, args) => {

message.edit(`Total Members in **${message.guild.name}**: ***${message.guild.memberCount}***`)
};

exports.help = {
  name: 'members',
  description: "Count's the Number of member's in the guild",
  usage: 'members'
};
