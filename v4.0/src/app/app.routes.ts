import { Routes, RouterModule } from '@angular/router';

// Componentes de la APP
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'buscar/:palabra', component: BuscadorComponent},
    { path: '', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
