const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, Colors } = require("discord.js")
const config = require("../config.js");
module.exports = {
  name: "bot",
  description: "View your bot statistics.",
  options: [],
  run: async (client, interaction) => {

    let link_button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Refresh')
        .setStyle(ButtonStyle.Success)
        .setCustomId("Refresh"))


    const embed = new EmbedBuilder()
      .setTitle(client.user.username + " Bot Statistics")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
      .setDescription(`**
• Owner: \`Tylerع#4617\`
• Developer: \`MO#5144\`

• User Count: \`${client.users.cache.size}\`
• Server Count: \`${client.guilds.cache.size}\`
• Channel Count: \`${client.channels.cache.size}\`
• Command Count: \`${client.commands.map(c => c.name).length}\`
• Discord.js Version: \`V14.3.0\`
• Node.js Version: \`${process.version}\`
• Operation Time: <t:${Math.floor(Number(Date.now() - client.uptime) / 1000)}:R>
• Ping: \`${client.ws.ping} MS\`
• Memory Usage: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`
• OS: \`${process.platform}\`
**`)
      .setColor("#d9d9d9")
      .setTimestamp()
    return interaction.reply({ embeds: [embed], components: [link_button] }).then(async Message => {

      const filter = i => i.user.id === interaction.user.id
      let col = await interaction.channel.createMessageComponentCollector({ filter, time: 120000 })

      col.on('collect', async (button) => {
        switch (button.customId) {
          case 'Refresh': {
            const embed2 = new EmbedBuilder()
              .setTitle(client.user.username + " Bot Statistics")
              .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
              .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})

              .setDescription(`**
• Owner: \`Tylerع#4617\`
• Developer: \`MO#5144\`

• User Count: \`${client.users.cache.size}\`
• Server Count: \`${client.guilds.cache.size}\`
• Channel Count: \`${client.channels.cache.size}\`
• Command Count: \`${client.commands.map(c => c.name).length}\`
• Discord.js Version: \`V14.3.0\`
• Node.js Version: \`${process.version}\`
• Operation Time: <t:${Math.floor(Number(Date.now() - client.uptime) / 1000)}:R>
• Ping: \`${client.ws.ping} MS\`
• Memory Usage: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`
• OS: \`${process.platform}\`
**`)
              .setColor("#d9d9d9")
              .setTimestamp()
            await interaction.editReply({ content: "**✔️ Data Updated.**", embeds: [embed2] }).catch(err => { })
            await button.deferUpdate().catch(e => { })
          }
        }
      })
      col.on('end', async (button) => {
        link_button = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel('Refresh')
            .setStyle(ButtonStyle.Success)
            .setCustomId("Refresh")
            .setDisabled(true))
        return interaction.editReply({ content: "**Your Time Ended!**", components: [link_button] }).catch(err => { })
      })
    }).catch(err => { })
  },
};
