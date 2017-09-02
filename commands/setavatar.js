exports.run = (client, message, args) => {

message.delete();
client.user.setAvatar(message.content.split(' ').slice(1).join(" "))
};

exports.help = {
  name: 'setavatar',
  description: "Set's/Changes your avatar with image url",
  usage: 'setavatar [link]'
};
