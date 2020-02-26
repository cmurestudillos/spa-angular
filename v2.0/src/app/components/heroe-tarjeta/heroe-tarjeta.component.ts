import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // Propiedades a recibir fuera del componente
  @Input() heroe:any = {};
  @Input() index:number;

  // Propiedades que va a mandar fuera del componente
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router:Router ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['/heroe', this.index]); 
    // this.heroeSeleccionado.emit( this.index );
  }

}
