
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { SeccionNoticiasComponent } from './components/seccion-noticias/seccion-noticias.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'presentacion', component: PresentacionComponent },
    { path: 'noticias', component: SeccionNoticiasComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

