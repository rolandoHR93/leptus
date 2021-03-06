import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'src/app/config/constants';
import { Observable } from 'rxjs';

const AUTH_API = AppSettings.API_ENDPOINT + '/auth/';
const CODE_API = AppSettings.CODE_API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {

    return this.http.post(AUTH_API + 'login/' + CODE_API, {
      email,
      password
    }, httpOptions);
  }

  login2(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(nombres: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/' + CODE_API, {
      nombres,
      email,
      password
    }, httpOptions);
  }

  // ----------

  getUsers() {
    // this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
    this.http.get(AppSettings.API_ENDPOINT+"/usuarios/" + "lista/" + CODE_API).subscribe(data => {
      console.log(data);
    });
  }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
  }

}
