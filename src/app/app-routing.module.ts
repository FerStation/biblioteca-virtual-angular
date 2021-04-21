import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { FormBooksComponent } from './components/books/form-books/form-books.component';
import { ListBooksComponent } from './components/books/list-books/list-books.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: ListBooksComponent},
  {path: 'books/detail/:id', component: BookDetailComponent},
  {path: 'books/new',component: FormBooksComponent},
  {path: 'books/update/:id',component: FormBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
