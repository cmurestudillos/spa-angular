import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  loading = true;

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._heroesService.getHeroes().subscribe({
      next: heroes => {
        this.heroes = heroes;
        this.loading = false;
      },
      error: error => {
        console.error('Error al cargar los héroes:', error);
        this.loading = false;
      },
    });
  }

  verHeroe(index: number) {
    // Usamos el _id del héroe en lugar del índice
    const heroe = this.heroes[index];
    if (heroe && heroe._id) {
      this._router.navigate(['/heroe', heroe._id]);
    }
  }
}
