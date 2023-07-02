module.exports = {
    TOKEN: "", 
    ownerID: "",
    botInvite: "",
    status: '/play',
    commandsDir: './commands',

    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] 
        },

        voiceConfig: {
            leaveOnEnd: false, 
            autoSelfDeaf: true,
            leaveOnEmpty: false,
            leaveOnTimer: { //The leaveOnEnd variable must be "false" to use this system.
                status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
                time: 20000, //1000 = 1 second
            }
        },

        maxVol: 150, //You can specify the maximum volume level.
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
        }
    }
}
