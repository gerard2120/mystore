import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

// input son las props que se pasan de componente padre a hijo props en vue
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img')
    // codigo para personalizar en el cambio de una imagen
  }
  @Input() alt: string = '';
  // atributos para emitir eventos hacia el componente padre
  @Output() loaded = new EventEmitter<string>();
  imgDefault:string  = 'https://www.m2crowd.com/core/i/placeholder.png';
  // counter:number = 0;
  // counterFn: number  | undefined;


  constructor() {
    // el constructor corre antes del render
    // no debemos de correr cosas aincronas y solo se crea una vez
    console.log("Constructor corriendo", 'imgValue => ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // al igual que el constructor corre antes que el render
    // su objetivos es estas actualizando los inputs (cambios en inputs)
    // puede corres multiples veces
    console.log('ngOnchages', 'imgValue =>', this.img);
    // se activa para capturar el cambio de todos los inputs
    console.log ('changes', changes);
    // if (changes) {
    //   codigo de un cambio en especifico
    // }
  }

  ngOnInit(): void {
    // al igual que el constructor corre antes que el render
    // podemos correr cosas asyncronas, promesas, llamadas api, etc
    // corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    // se guarda el valor del evento de windows para poder destruirlo despues
    // this.counterFn =  window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000)
  }

  ngAfterViewInit(): void {
    // corre despues de renderizar el componente
    // manemos los hijos (handle-children)
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete, indica cuando se elimino el componente
    console.log('ngOnDestroy');
    // se limpia el evento set interval
    // window.clearInterval(this.counterFn);
  }
  imgError(){
    this.img = this.imgDefault
  }

  imgLoaded(){
    // emite el evento para que lo escuche el componente padre
    console.log("Log Hijo");
    // envias informacion
    this.loaded.emit(this.img);
  }

}
