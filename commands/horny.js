const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horny')
		.setDescription('Ifykyk'),
	async execute(interaction) {
		return interaction.reply('What the fuck are you doing?');
	},
};