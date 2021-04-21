import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/IBook.module';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {

  @Input() book: IBook

  constructor() { }

  ngOnInit(): void {
  }

}
