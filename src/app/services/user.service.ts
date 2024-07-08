import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { User } from '../models/user.model';
import {UserFilterDTO} from "../models/user-filter.dto";
import {UserConformityDTO} from "../models/user-conformity.dto";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  private apiUrl = 'http://localhost:8090/api/users'; // Update with your API URL

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) {

  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getUsersByFilter(filter: UserFilterDTO, page: number, size: number): Observable<{ content: UserConformityDTO[] }> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    console.log("getting users ....");
    return this.http.post<{ content: UserConformityDTO[] }>(`${this.apiUrl}/filter`, filter, { params });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: any): Observable<any> {
    console.log("updating user ùùùùù");
    console.log(user);
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user).pipe(
      tap((response: any) => {
        this.user = response;
        console.log("user updated ùùùùù");
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setLocalUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  updateLocalUser(): Observable<any> {
    console.log('updating local user');
    const user = localStorage.getItem('user');
    if (user != null || user != undefined) {
      console.log('updating local user inside if');
      const localUser = JSON.parse(user);
      return this.getUser(localUser.id).pipe(
        tap((response: any) => {
          this.user = response;
        })
      );
    }
    this.authService.logout();
    return of(null);
  }

  initializeUser() {

  }
}
