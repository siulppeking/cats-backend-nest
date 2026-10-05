import { Module } from '@nestjs/common';
import { CatsController } from './controller/cats.controller.js';
import { CatsService } from './service/cats.service.js';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
