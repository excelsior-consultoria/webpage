import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'sobre', component: AboutUsComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];
