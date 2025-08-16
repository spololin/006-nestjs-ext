import { Body, Controller, Get, Post } from '@nestjs/common';
import * as book from '../types/book';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  create(@Body() newBook: book.IBook) {
    this.booksService.create(newBook);
  }

  @Get()
  findAll(): book.IBook[] {
    return this.booksService.findAll();
  }
}
