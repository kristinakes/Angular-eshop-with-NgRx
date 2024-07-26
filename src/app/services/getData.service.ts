import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  private getStandartOptions(): {headers: HttpHeaders}{
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getData(url: string) {
    const options = this.getStandartOptions();

    return this.http.get(url, options).pipe(catchError(this.handleError));
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is issue with client or network: ', error.error);
    } else {
      console.error('Server side error: ', error.error);
    }

    return throwError(() => new Error('Can not retreive data'));
  }
}
