const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rule34')
		.setDescription('Horny art.'),
	async execute(interaction) {
		return interaction.reply('https://media.tenor.com/OUpRTq72mzsAAAAC/daddys-home2-daddys-home2gifs.gif');
	},
};