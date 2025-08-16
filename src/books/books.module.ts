import { Module } from '@nestjs/common';
import { BooksController } from '../books/books.controller';
import { BooksService } from '../books/books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
