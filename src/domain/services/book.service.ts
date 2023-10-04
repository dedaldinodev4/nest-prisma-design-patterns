import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/libs/PrismaClient';
import { IBookRequest } from '../models/book.dto';
import { Book } from '../models/Book';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async create(data: IBookRequest): Promise<Book | Error> {
    const bookExits = await this.prisma.book.findUnique({
      where: { bar_code: data.bar_code },
    });

    if (bookExits) {
      throw new Error('Book already exists.');
    }

    const bookSave = await this.prisma.book.create({
      data,
    });

    return new Promise(() => {
      return new Book(
        bookSave.title,
        bookSave.description,
        bookSave.bar_code,
        bookSave.created_at,
      );
    });
  }
}
