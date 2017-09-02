exports.run = (client, message, args) => {
  message.delete();
  message.channel.send("Ping???").then(m => m.edit(`Pong!, I am alive dude, \n**TIME TAKEN**: ${m.createdTimestamp - message.createdTimestamp}***ms***. \n**API Latency**: ${Math.round(client.ping)}***ms***`))
};

exports.help = {
  name: 'ping',
  description: 'beep beep, I wonder What this Does, beep beep',
  usage: 'ping'
};
