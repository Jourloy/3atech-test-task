import {Injectable, OnModuleInit} from "@nestjs/common";
import {Telegraf} from "telegraf";

@Injectable()
export class TelegrafService implements OnModuleInit {
	public bot: Telegraf = new Telegraf(process.env.BOT_TOKEN);

	async onModuleInit() {
		await this.bot.launch();
	}
}
