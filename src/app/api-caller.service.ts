import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http: HttpClient) { }

  getString(): Observable<any> {

    var url = "https://localhost:44356/api/v1.0/api-namespace/controllername/get";

    return this.http.get<any>(url)
      .pipe(
        tap((resp: any) => {
          return resp;
        }),
        catchError((e: any) => {
          return throwError(e);
        }));
  }



}
