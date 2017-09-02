exports.run = (client, message, args) => {

message.delete();
client.user.setGame(message.content.split(' ').slice(1).join(" "), 'setStream().js')
};

exports.help = {
  name: 'setstream'
  description: 'Set\'s Your stream'
  usage: 'setstream [your stream name]'
};
