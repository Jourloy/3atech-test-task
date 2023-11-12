import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import { Logger } from "@nestjs/common";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require(`dotenv`).config();

async function bootstrap() {
	const logger = new Logger(`App`);
	const app = await NestFactory.create(AppModule);

	
	logger.log(`App is running on port 3000`);
	await app.listen(3000);
}
bootstrap();
