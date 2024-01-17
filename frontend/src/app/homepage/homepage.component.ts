import { Component, OnInit } from '@angular/core';
import { Book } from '../share/model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookservice: BookService) {
    this.books = bookservice.getBooks();
  }

  ngOnInit(): void {
    // Add your initialization logic here
  }
}
