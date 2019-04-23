var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 3) == '!tz') {
        var args = message.substring(1).split(' ');
       
        var cmd = args[0];
      
        var command2 = args[1];
      

        switch(command2) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            case 'chileTime':
                const
                takeTwelve = n => n > 12 ? n - 12 : n,
                addZero = n => n < 10 ? "0" + n : n;

               
                    let d, h, m, s, t, amPm, today;
            
                    d = new Date();
                    h = addZero(takeTwelve(d.getHours()));
                    m = addZero(d.getMinutes());
                    s = addZero(d.getSeconds());
                    t = `${h}:${m}:${s}`;
            
                    var options = { year: 'numeric', month: 'short', day: 'numeric' };
                    amPm = d.getHours() >= 12 ? "pm" : "am";
                    today = d.toLocaleDateString('es-CL');
                   
                    bot.sendMessage({
                        to: channelID,
                        message: `Chile: Day: ${today} Time: ${t}` 
                    });
                 
            
               

                
            break;
        }
    }
});
