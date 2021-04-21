import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBookComponent } from './components/card-book/card-book.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CardBookComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CardBookComponent]
})
export class SharedModule { }
