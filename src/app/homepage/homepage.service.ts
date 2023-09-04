import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private URL: string;

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    //return Observable.throw(err);
    return throwError(err);
  }

  getData(): Observable<any> {
    this.URL = "http://18.140.201.252:8001/demo/testing/data";
    return this.http.get(this.URL).pipe(
      catchError(this.handleError)
    );
  }
}
