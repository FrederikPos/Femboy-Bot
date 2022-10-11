const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spray')
		.setDescription('Use this only when someone is horny!'),
	async execute(interaction) {
		return interaction.reply('https://media.tenor.com/wwxCxxhkWTIAAAAC/anti-horni-spray.gif');
	},
};