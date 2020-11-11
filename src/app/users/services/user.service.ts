import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.warn('User.service - getUsers()');
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // User Id must be null for the Web API to assign an Id
    const newUser = { ...user, id: null };
    return this.http.post<User>(this.usersUrl, newUser, { headers })
      .pipe(
        tap(data => console.log('createUser: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, { headers })
      .pipe(
        tap(data => console.log('deleteUser: ' + id)),
        catchError(this.handleError)
      );
  }

  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put<User>(url, user, { headers })
      .pipe(
        tap(() => console.log('updateUser: ' + user.id)),
        // Return the User on an update
        map(() => user),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
