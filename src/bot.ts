import { Client, ClientOptions } from 'discord.js';

const options: ClientOptions = {
	intents: ['GuildModeration'],
};

const client = new Client(options);
client.once('ready', () => console.log('bot ready!'));

export function run() {
	client.login(process.env.DISCORD_BOT_TOKEN);
}
