import { Injectable } from '@angular/core';
import  { Product } from '../../models/product.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  // signo de pesos equivale a un observable
  myCart$ = this.myCart.asObservable();

  total = 0;
  constructor() {

  }

  addToShoppingCart(product: Product){
    console.log('product', product);
    this.myShoppingCart.push(product);
    // pasa a el store del servicio
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
