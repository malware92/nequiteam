import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApitrxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApitrxProvider {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

}
