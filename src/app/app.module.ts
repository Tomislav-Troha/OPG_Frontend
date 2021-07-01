import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import 'animate.css';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KosaricaComponent } from './components/kosarica/kosarica.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProizvodiComponent,
    KosaricaComponent,
    ProfilComponent,
    LoginRegisterComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProizvodiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
