import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IcecreamService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/icecreams';

  getIcecreams() {
    return this.http.get(this.baseUrl);
  }

}
