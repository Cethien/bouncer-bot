declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DISCORD_BOT_TOKEN: string;
			NODE_ENV: 'development' | 'production';
		}
	}
}

export {};
