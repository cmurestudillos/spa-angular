import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Heroe, ApiResponse } from '../models/heroe';

@Injectable()
export class HeroesService {
  private apiUrl = 'https://spa-heroes-service.vercel.app/api';
  private heroesCache: Heroe[] = [];

  constructor(private http: HttpClient) {}

  // Obtenemos Heroes desde la API
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/superheroes`).pipe(
      map(response => {
        this.heroesCache = response.superheroes;
        return response.superheroes;
      })
    );
  }

  // Obtenemos los datos del heroe seleccionado por ID
  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/superheroes/${id}`).pipe(
      map(response => {
        return response.superheroe;
      })
    );
  }

  // Función para el buscador
  buscarHeroes(palabra: string): Observable<Heroe[]> {
    if (this.heroesCache.length === 0) {
      // Si no tenemos cache, obtenemos todos los héroes primero
      return this.getHeroes().pipe(map(heroes => this.filtrarHeroes(heroes, palabra)));
    } else {
      // Si tenemos cache, filtramos directamente
      return of(this.filtrarHeroes(this.heroesCache, palabra));
    }
  }

  private filtrarHeroes(heroes: Heroe[], palabra: string): Heroe[] {
    const heroesArray: Heroe[] = [];
    palabra = palabra.toLowerCase();

    for (let i = 0; i < heroes.length; i++) {
      const heroe = heroes[i];
      const nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(palabra) >= 0) {
        // Agregamos el índice para mantener compatibilidad
        const heroeConIndex = { ...heroe, index: i };
        heroesArray.push(heroeConIndex);
      }
    }

    return heroesArray;
  }

  // Método auxiliar para obtener héroe por índice (para compatibilidad)
  getHeroeByIndex(index: number): Observable<Heroe | undefined> {
    if (this.heroesCache.length === 0) {
      return this.getHeroes().pipe(map(heroes => heroes[index]));
    } else {
      return of(this.heroesCache[index]);
    }
  }
}
