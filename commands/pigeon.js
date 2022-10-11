const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pigeon')
		.setDescription('PIGEON!!!!'),
	async execute(interaction) {
		return interaction.reply('https://th.bing.com/th/id/OIP.rVrc0tw9BAKaJqPTZFbpegHaEj?pid=ImgDet&rs=1');
	},
};