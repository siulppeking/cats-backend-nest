import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats/cats.module.js';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
