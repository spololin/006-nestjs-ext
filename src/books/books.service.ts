import { Injectable } from '@nestjs/common';
import { IBook } from '../types/book';

@Injectable()
export class BooksService {
  private readonly books: IBook[] = [];

  create(book: IBook) {
    this.books.push(book);
  }

  findAll(): IBook[] {
    return this.books;
  }
}
