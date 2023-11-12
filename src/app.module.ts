import {Module} from "@nestjs/common";
import {TelegrafModule} from "./telegraf/telegraf.module";
import {ExampleModule} from "./example/example.module";

@Module({
	imports: [TelegrafModule, ExampleModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
