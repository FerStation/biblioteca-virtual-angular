import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IBook } from 'src/app/models/IBook.module';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: IBook = {
    photoURL: null,
    title: null,
    author: null,
    description: null,
    releaseYear: null,
    url: null
  };

  constructor(
    private booksService: BooksService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.booksService.findById(id).subscribe(response =>{
      this.book = response;
    })
  }

}
