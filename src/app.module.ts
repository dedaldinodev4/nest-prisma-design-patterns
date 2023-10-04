import { Module } from '@nestjs/common';
import { BookController } from './api/controllers/book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class AppModule {}
