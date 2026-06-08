import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: Heroe | null = null;
  loading = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this._heroesService.getHeroe(id).subscribe({
        next: heroe => {
          this.heroe = heroe;
          this.loading = false;
        },
        error: error => {
          console.error('Error al cargar el héroe:', error);
          this.loading = false;
        },
      });
    });
  }

  // Método para formatear la fecha de aparición
  getAparicionYear(): string {
    if (this.heroe?.aparicion) {
      const date = new Date(this.heroe.aparicion);
      return date.getFullYear().toString();
    }
    return '';
  }

  volverHeroes() {
    this._router.navigate(['/heroes']);
  }
}
