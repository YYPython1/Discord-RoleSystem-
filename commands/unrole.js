module.exports = {
    name: 'unrole',
    description: 'removes role',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Your player / member role. default role.');
            let rankRole = message.guild.roles.cache.find(role => role.name === 'Your role you want to give to a player.');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(rankRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been demoted.`);
        } else {
            message.channel.send('Cant find that member!');
        }
    }

}