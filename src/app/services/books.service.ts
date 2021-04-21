import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IBook } from '../models/IBook.module';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private URL: string = environment.URL;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  findAll(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.URL).pipe(
      map(response => response),
      catchError(erro => this.showError(erro))
    );
  }

  findById(id: number): Observable<IBook>{
    return this.http.get<IBook>(`${this.URL}/${id}`).pipe(
      map(response => response),
      catchError(erro => this.showError(erro))
    );
  }

  store(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.URL}`, book).pipe(
      map(response => response),
      catchError(erro => this.showError(erro))
    );
  }

  update(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.URL}/${book.id}`, book).pipe(
      map(response => response),
      catchError(erro => this.showError(erro))
    );
  }

  destroy(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(response => response),
      catchError(erro => this.showError(erro))
    );
  }


  //-----------------------------

  showError(e: any): Observable<any> {
    this.showMessage('Erro','Não foi possivel realizar a operação','toast-error');
    return EMPTY;
  }

  showMessage(title: string, message: string, type: string): void {
    this.toastr.show(message, title, {closeButton: true, progressBar: true}, type);
  }
}
