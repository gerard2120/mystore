import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) { }

  activeMenu:boolean = false;
  counter = 0;

  ngOnInit(): void {
    // se suscribe a la store de productos en myCart
    this.storeService.myCart$.subscribe(product =>{
      this.counter = product.length
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }

}
