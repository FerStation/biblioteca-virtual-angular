import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/models/IBook.module';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-form-books',
  templateUrl: './form-books.component.html',
  styleUrls: ['./form-books.component.css']
})
export class FormBooksComponent implements OnInit {

  book: IBook = {
    photoURL: null,
    title: null,
    author: null,
    description: null,
    releaseYear: null,
    url: null
  };

  pageTitle: string = "Cadastrar livro"

  constructor(
    private booksService: BooksService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    let element = document.querySelector('.navbar');
    element.classList.remove('fixed-top');
   }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    if(id > 0){
      this.pageTitle = "Atualizar livro"
      this.booksService.findById(id).subscribe(response =>{
        this.book = response;
      })
    }
  }

  saveBook():void {
    if(this.book.hasOwnProperty('id')){ //update
      this.booksService.update(this.book).subscribe( response =>{
        this.book = response;
        this.booksService.showMessage(
          'Sucesso!',
          `${this.book.title} alterado com sucesso!`,
          'toast-success'
        );
        this.router.navigate(['/books'])
      });

    } else { //save
      this.booksService.store(this.book).subscribe( response =>{
        this.book = response;
        this.booksService.showMessage(
          'Sucesso!',
          `${this.book.title} cadastrado com sucesso!`,
          'toast-success'
        );
        this.router.navigate(['/books'])
      });
    }
  }//end of saveBook

  clearForm():void {
    this.book = {
      photoURL: null,
      title: null,
      author: null,
      description: null,
      releaseYear: null,
      url: null
    };
  }
}
