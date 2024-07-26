import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http: HttpClient = inject(HttpClient);

  //Event emiter when product is added
  private productAddedSubject = new BehaviorSubject<null>(null);

  products$ = this.productAddedSubject.pipe(switchMap(() => this.http
    .get<Product[]>(environment.productUrl)
    .pipe(catchError(this.handleError)))) 

  //ACTION - to get one product
  ///sending new request to server based on product id
  getProduct(id: string): Observable<Product> {
    return this.productAddedSubject.pipe(switchMap(() => 
     this.http
      .get<Product>(`${environment.productUrl}/${id}`)
      .pipe(catchError(this.handleError))))
   
  }

  //ACTION - post nwe product to server
  postNewProduct(product: Product) {
    return this.http
      .post<Product>(environment.productUrl, product)
      .pipe(catchError(this.handleError))
      .subscribe(() => this.emitProductAdded()); //can I do the subscribe here, or should it be moved to component where i call this service
  }

  //ACTION- update product in server
  updateProduct(product: Product, productId: number | string) {
    return this.http
      .put<Product>(`${environment.productUrl}/${productId}`, product)
      .pipe(catchError(this.handleError));
  }

  emitProductAdded(): void {
    this.productAddedSubject.next(null);
  }

  //ACTION - delete product
  deleteProduct(productId: number | string) {
    return this.http
      .delete<Product>(`${environment.productUrl}/${productId}`)
      .pipe(catchError(this.handleError));
  }

  //Function to handle errors in requests
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is issue with client or network: ', error.error);
    } else {
      console.error('Server side error: ', error.error);
    }

    return throwError(() => new Error('Can not retreive product data'));
  }
}
