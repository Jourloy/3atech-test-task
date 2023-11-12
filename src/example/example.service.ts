/* eslint-disable no-useless-escape */
import {Injectable} from "@nestjs/common";
import {ABOUT_ME, GITHUB, HELLO_MSG} from "src/assets/strings";
import {TelegrafService} from "src/telegraf/telegraf.service";

@Injectable()
export class ExampleService {
	constructor(private telegrafService: TelegrafService) {
		this.init();
	}

	private replaceString(str: string) {
		return str
			.replace(/\~/g, `\\~`)
			.replace(/\`/g, `\\\``)
			.replace(/\>/g, `\\>`)
			.replace(/\#/g, `\\#`)
			.replace(/\+/g, `\\+`)
			.replace(/\-/g, `\\-`)
			.replace(/\=/g, `\\=`)
			.replace(/\{/g, `\\{`)
			.replace(/\}/g, `\\}`)
			.replace(/\./g, `\\.`)
			.replace(/\!/g, `\\!`);
	}

	private async init() {
		this.telegrafService.bot.command(`start`, ctx => {
			ctx.reply(this.replaceString(HELLO_MSG), {
				parse_mode: `MarkdownV2`,
				reply_markup: {inline_keyboard: [[{text: `Меню`, callback_data: `menu1`}]]},
			});
		});

		this.telegrafService.bot.action(`menu1`, ctx => {
			ctx.editMessageText(this.replaceString(HELLO_MSG), {
				parse_mode: `MarkdownV2`,
				reply_markup: {
					inline_keyboard: [
						[
							{text: `О авторе`, callback_data: `about`},
							{text: `GitHub`, callback_data: `github`},
						],
						[{text: `На главную`, callback_data: `menu`}],
					],
				},
			});
		});

		this.telegrafService.bot.action(`menu`, ctx => {
			ctx.editMessageText(this.replaceString(HELLO_MSG), {
				parse_mode: `MarkdownV2`,
				reply_markup: {inline_keyboard: [[{text: `Меню`, callback_data: `menu1`}]]},
			});
		});

		this.telegrafService.bot.action(`about`, ctx => {
			ctx.editMessageText(this.replaceString(ABOUT_ME), {
				parse_mode: `MarkdownV2`,
				reply_markup: {
					inline_keyboard: [
						[{text: `Обратно`, callback_data: `menu1`}],
						[{text: `На главную`, callback_data: `menu`}],
					],
				},
			});
		});

		this.telegrafService.bot.action(`github`, ctx => {
			ctx.editMessageText(this.replaceString(GITHUB), {
				parse_mode: `MarkdownV2`,
				reply_markup: {
					inline_keyboard: [
						[{text: `Обратно`, callback_data: `menu1`}],
						[{text: `На главную`, callback_data: `menu`}],
					],
				},
			});
		});
	}
}
