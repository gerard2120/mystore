import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // puesto que es un lenguaje tipado siempre debemos de inicializar el producto en el estado de angular
  // se soluciona negando al producto o creando un producto con todos los campos vacios para que estos no marquen error
  @Input('product') product!: Product;
  @Output() addedProduct = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
