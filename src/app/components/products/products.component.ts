import { Component, OnInit } from '@angular/core';
import  { Product } from '../../../models/product.model';
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // guardar los productos que vienen del componente hijo
  myShoppingCart: Product[] = [];
  total:number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];
  // se realiza una inyeccion de dependencias
  // independientemente de cuantas veces se inyecten y sean instanciadas las dependencias, solo se crea una vez
  // Inyección de Dependencias (Dependency Injection o DI) es un patrón de diseño en el que una clase requiere
  // instancias de una o más clases y en vez de generarlas dentro de su propio constructor, las recibe ya instanciadas
  // por un mecanismo externo.
  constructor(
    private storeService: StoreService
  ) {
    // consultamos los productos que estan privados
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  // evento que se recibe del hijo al padre
  onAddToShoppingCart(product: Product){
    console.log('product', product);
    // consumo de servicios en angular
    this.storeService.addToShoppingCart(product);
    this.total = this.storeService.getTotal();
  }

}
