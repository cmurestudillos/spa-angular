import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  palabra!: string;
  loading = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.palabra = params['palabra'];
      this.loading = true;

      this._heroesService.buscarHeroes(params['palabra']).subscribe({
        next: heroes => {
          this.heroes = heroes;
          this.loading = false;
        },
        error: error => {
          console.error('Error en la búsqueda:', error);
          this.heroes = [];
          this.loading = false;
        },
      });
    });
  }

  verHeroe(index: number) {
    const heroe = this.heroes[index];
    if (heroe && heroe._id) {
      this._router.navigate(['/heroe', heroe._id]);
    }
  }
}
