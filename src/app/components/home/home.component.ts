import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/IBook.module';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: IBook[] = [];

  constructor(
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.booksService.findAll().subscribe( response => {
      this.books = response;
    })
  }

}
