exports.run = (client, message, args) => {

message.delete();
message.member.setNickname(message.content.split(' ').slice(1).join(" "))
};

exports.help = {
  name: 'setnick',
  description: "Set's the user nickname\nNote, Must have [Manage nickname's] Perms to do so",
  usage: 'setnick [your new nickname]'
};
