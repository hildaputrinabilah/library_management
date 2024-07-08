// src/books/book.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':code')
  async findOne(@Body() code: string): Promise<Book> {
    return this.bookService.findOne(code);
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }
}
