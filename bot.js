const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","SV."));
    });



client.on('message', msg => {
    if (msg.content === '.') {
      msg.channel.send('**welcome to Strive.**');
    }
  });
 


client.on('message', msg => {
    if (msg.content === 'لينا') {
      msg.channel.send('**شو بدك منها **');
    }
  });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
