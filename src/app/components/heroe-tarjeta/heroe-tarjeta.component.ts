import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent {
  // Propiedades a recibir fuera del componente
  @Input() heroe: Heroe = {} as Heroe;
  @Input() index!: number;

  // Propiedades que va a mandar fuera del componente
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  verHeroe() {
    // Preferimos usar el _id si está disponible, sino el índice
    if (this.heroe._id) {
      this._router.navigate(['/heroe', this.heroe._id]);
    } else {
      this._router.navigate(['/heroe', this.index]);
    }
  }

  // Método para formatear la fecha de aparición
  getAparicionYear(): string {
    if (this.heroe.aparicion) {
      const date = new Date(this.heroe.aparicion);
      return date.getFullYear().toString();
    }
    return '';
  }
}
