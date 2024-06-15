import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
