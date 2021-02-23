const ms = require('ms');
module.exports = {
    name: 'role',
    description: 'gives role for a certain time and perma time.',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Your player / member role. default role.');
            let rankRole = message.guild.roles.cache.find(role => role.name === 'Your role you want to give to a player.');

            let memberTarget= message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(rankRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been promoted for a unknown time.`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(rankRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been promoted for ${ms(ms(args[1]))} time.`);

            setTimeout(function () {
                memberTarget.roles.remove(rankRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> The role you got expired, We gonna demote you know !`);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
    }

}