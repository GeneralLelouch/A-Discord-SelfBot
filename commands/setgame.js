exports.run = (client, message, args) => {

message.delete();
client.user.setGame(message.content.split(' ').slice(1).join(" "))
};

exports.help = {
  name: 'setgame',
  description: "Set's your game status",
  usage: 'setgame [name]'
};
