import {Module} from "@nestjs/common";
import {ExampleService} from "./example.service";
import {TelegrafModule} from "src/telegraf/telegraf.module";

@Module({
	imports: [TelegrafModule],
	controllers: [],
	providers: [ExampleService],
})
export class ExampleModule {}
