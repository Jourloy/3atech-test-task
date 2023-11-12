import { Module } from "@nestjs/common";
import { TelegrafService } from "./telegraf.service";

@Module({
	imports: [],
	controllers: [],
	providers: [TelegrafService],
	exports: [TelegrafService],
})
export class TelegrafModule {}