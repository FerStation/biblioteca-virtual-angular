import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/IBook.module';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books: IBook[] = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.booksService.findAll().subscribe( response => {
      this.books = response;
    })
  }

  delete(book: IBook): void{
    this.booksService.destroy(book.id).subscribe(()=>{
      this.booksService.showMessage(
        'Sucesso!',
        `${book.title} excluido com sucesso`,
        'toast-success'
      );
      window.location.reload();
    })
  }

}
