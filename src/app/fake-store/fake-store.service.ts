import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product'; 
@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}products/${id}`);
  }
}
