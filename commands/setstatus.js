exports.run = (client, message, args) => {

message.delete();
client.user.setStatus(message.content.split(' ').slice(1).join(" "))
};

exports.help - {
  name: 'setstatus'
  description: 'Set\'s the User\'s Status'
  usage: 'setstatus [online/dnd/idle/invinsible]'
};
