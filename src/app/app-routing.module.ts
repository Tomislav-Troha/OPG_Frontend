import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KosaricaComponent } from './components/kosarica/kosarica.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

import { AuthguardService as AuthGuard } from './auth/authguard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'kosarica/:user',
    component: KosaricaComponent,
    canActivate: [AuthGuard],
  },
  { path: 'proizvodi', component: ProizvodiComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'prijava_registracija', component: LoginRegisterComponent },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
