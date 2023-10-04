import { Body, Controller, Post } from '@nestjs/common';
import { Book } from 'src/domain/models/Book';
import { IBookRequest } from 'src/domain/models/book.dto';
import { BookService } from 'src/domain/services/book.service';

@Controller('api/v1/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: IBookRequest): Promise<Book | Error> {
    return await this.bookService.create(data);
  }
}
