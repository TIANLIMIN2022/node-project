// cats.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';

@Module({
  controllers: [CatsController],
  providers: [AppService],
})
export class CatsModule {}
