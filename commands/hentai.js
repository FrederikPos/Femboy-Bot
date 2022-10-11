const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hentai')
		.setDescription('Anime but better! wink wink.'),
	async execute(interaction) {
		return interaction.reply('https://media.tenor.com/SdsYv4vylh0AAAAC/dog-saying-no-no.gif');
	},
};