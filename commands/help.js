const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, msg) => {
  let prefix = await db.fetch(`${client.settings.prefix}`)
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor("Discord4Bots - information", client.user.avatarURL)
  .addField("Website Creator","CustomTag#0001")
	.addField("Add a bot?","[Click here](https://discord4bots.herokuapp.com/addbot)")
  .addField("Hosted by","[Heroku](https://heroku.com)")
  .addField("Website","[Click here](https://discord4bots.herokuapp.com/)")
  .addField("Help Cmds","c!help")
  message.channel.send({embed: embed})
  
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['help', 'information', 'info'],
	permLevel: 0,
	kategori: 'general'
}

exports.help = {
	name: 'help',
	description: 'Shows information about the system!',
	usage: 'help'
}
