import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    // se realiza la peticion y aparte se realiza el tipado
    return this.http.get<Product[]>('https://fakestoreapi.com/products');

  }

}

