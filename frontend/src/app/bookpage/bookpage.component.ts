import { Component, OnInit } from '@angular/core';
import { Book } from '../share/model/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.css'
})
export class BookpageComponent implements OnInit{
  book!: Book;
  constructor(activatedRoute: ActivatedRoute, bookservice:BookService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.book = bookservice.getBookbyId(params['id']);

      }
  })
  }


  ngOnInit(): void {
    // Add your initialization logic here
  }
}
