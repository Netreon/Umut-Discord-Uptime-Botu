const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle } = require(`discord.js`);

const falseembed = new EmbedBuilder()
.setColor(0xFF0000)
.setDescription('Aşağıdan, istediğiniz gibi projelerinizi uptime edebilirsiniz!')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptimepanel')
		.setDescription(`Panel oluşturur.`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(client, interaction) {
        const add = new ButtonBuilder()
        .setCustomId('uekle')
        .setLabel('Ekle')
        .setStyle(ButtonStyle.Danger);

        const remove = new ButtonBuilder()
        .setCustomId('usil')
        .setLabel('Sil')
        .setStyle(ButtonStyle.Danger);

        const get = new ButtonBuilder()
        .setCustomId('usay')
        .setLabel('Göster')
        .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(add, remove, get);

        await interaction.reply({
            embeds: [falseembed],
            components: [row],
        });
	},
};