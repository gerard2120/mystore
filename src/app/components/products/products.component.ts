import { Component, OnInit } from '@angular/core';
import  { Product } from '../../../models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // guardar los productos que vienen del componente hijo
  myShoppingCart: Product[] = [];
  total:number = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1,  21)

  // se realiza una inyeccion de dependencias
  // independientemente de cuantas veces se inyecten y sean instanciadas las dependencias, solo se crea una vez
  // Inyección de Dependencias (Dependency Injection o DI) es un patrón de diseño en el que una clase requiere
  // instancias de una o más clases y en vez de generarlas dentro de su propio constructor, las recibe ya instanciadas
  // por un mecanismo externo.
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    // consultamos los productos que estan privados
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
      // console.log(data)
    });
  }

  // evento que se recibe del hijo al padre
  onAddToShoppingCart(product: Product){
    console.log('product', product);
    // consumo de servicios en angular
    this.storeService.addToShoppingCart(product);
    this.total = this.storeService.getTotal();
  }

}
