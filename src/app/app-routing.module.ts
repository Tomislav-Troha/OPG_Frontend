import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KosaricaComponent } from './components/kosarica/kosarica.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kosarica', component: KosaricaComponent },
  { path: 'proizvodi', component: ProizvodiComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'prijava_registracija', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
