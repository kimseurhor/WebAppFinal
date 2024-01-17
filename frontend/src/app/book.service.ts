import { Injectable } from '@angular/core';
import { Book } from './share/model/book';
import { booksample } from '../data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks():Book[]{
    return booksample;
  }

  getBookbyId(bookId:string):Book{
    return this.getBooks().find(book => book.id === bookId)?? new Book();
  }
}
