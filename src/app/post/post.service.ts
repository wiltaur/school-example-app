import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { User } from './User';
   
@Injectable({
  providedIn: 'root'
})
export class PostService {
   
  private apiURL = "https://localhost:44329/SchoolExample";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  GetAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL + '/GetUsers/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(user: any): Observable<User> {
    return this.httpClient.post<User>(this.apiURL + '/SchoolExample/SaveUser/', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}