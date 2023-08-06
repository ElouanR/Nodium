const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const client = require('../../client.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the bot ping!'),
	async execute(interaction) {
		await interaction.reply({content: 'Pinging...', fetchReply: true});
		const pingEmbed = new EmbedBuilder()
			.setColor('#000000')
			.setTitle('Pong!')
			.setDescription(`Latency : ${client.ws.ping}ms\nAPI Latency : ${Date.now() - interaction.createdTimestamp}ms`)
		await interaction.editReply({embeds: [pingEmbed]});
	}
};
