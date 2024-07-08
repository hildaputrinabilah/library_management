import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(code: string): Promise<Book> {
    return this.bookRepository.findOne({ where: { code } });
  }

  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async update(code: string, book: Partial<Book>): Promise<Book> {
    await this.bookRepository.update({ code }, book);
    return this.bookRepository.findOne({ where: { code } });
  }

  async remove(code: string): Promise<void> {
    await this.bookRepository.delete({ code });
  }
}
