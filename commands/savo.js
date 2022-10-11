const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('savo')
		.setDescription('NAVAL MI SAVO TED!!'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/emojis/1015252506512732170.webp?size=96&quality=lossless');
	},
};