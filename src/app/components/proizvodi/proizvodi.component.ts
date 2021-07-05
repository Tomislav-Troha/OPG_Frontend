import { Component, OnInit } from '@angular/core';
import { faCartPlus, faOtter } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../../-service.service';
import { Properties } from '../../Properties';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.scss'],
})
export class ProizvodiComponent implements OnInit {
  constructor(
    private serviceService: ServiceService,
    private authService: AuthService
  ) {}

  jajca = 'assets/jajca.jpg';
  ukis = 'assets/ukis.jpg';
  rez = 'assets/rezanci.jpg';
  faCartPlus = faCartPlus;
  feedback = '';

  prepelicja_jaja: Properties[] = [];

  Ukiseljena_prepelicja_jaja: Properties[] = [];

  rezanci: Properties[] = [];

  kosarica: Properties[] = [];

  ngOnInit(): void {
    this.serviceService
      .getJaja()
      .subscribe((prepJaja) => (this.prepelicja_jaja = prepJaja));

    this.serviceService
      .getUkiseljena_prepelicja_jaja()
      .subscribe(
        (prepJajaUkis) => (this.Ukiseljena_prepelicja_jaja = prepJajaUkis)
      );

    this.serviceService
      .getRezanci()
      .subscribe((rezanci) => (this.rezanci = rezanci));

    this.serviceService.getKosaricaProizvod().subscribe((kos) => {
      this.kosarica = kos;
    });
  }

  dodano(): any {
    return this.kosarica.length;
  }

  getSumPrepJaja(): number {
    let sum = 0;
    for (let i = 0; i < this.prepelicja_jaja.length; i++) {
      sum += this.prepelicja_jaja[i].cijena * this.prepelicja_jaja[i].kolicina;
    }

    return sum;
  }

  getSumKiselaPrepJaja(): number {
    let sum = 0;
    for (let i = 0; i < this.Ukiseljena_prepelicja_jaja.length; i++) {
      sum +=
        this.Ukiseljena_prepelicja_jaja[i].cijena *
        this.Ukiseljena_prepelicja_jaja[i].kolicina;
    }

    return sum;
  }

  getSumRezanci(): number {
    let sum = 0;
    for (let i = 0; i < this.rezanci.length; i++) {
      sum += this.rezanci[i].cijena * this.rezanci[i].kolicina;
    }

    return sum;
  }

  refreshKosarica() {
    this.serviceService.getKosaricaProizvod().subscribe((data) => {
      //console.log('', data);
      this.kosarica = data;
    });
  }

  DodajJaja(proizvod: any, kol: any, cijena: any) {
    let suma = this.getSumPrepJaja();
    let id;
    let email;
    if (kol == 0 || cijena == 0) {
      this.feedback = 'Molimo, odaberite kolicinu';
    } else {
      this.feedback = '';
      let newJaja = {
        proizvod: proizvod,
        cijena: cijena,
        kolicina: kol,
        id: id,
        email: this.authService.userEmail(),
      };
      console.log(newJaja, 'Ukupno:', suma);

      this.serviceService.addJaja(newJaja).subscribe(() => {
        this.refreshKosarica();
      });
    }
  }

  dodajUkisJaja(proizvod: any, kol: any, cijena: any) {
    let suma = this.getSumPrepJaja();
    let id;
    let email;
    if (kol == 0 || cijena == 0) {
      this.feedback = 'Molimo, odaberite kolicinu';
    } else {
      this.feedback = '';
      let newJaja = {
        proizvod: proizvod,
        cijena: cijena,
        kolicina: kol,
        id: id,
        email: this.authService.userEmail(),
      };
      console.log(newJaja, 'Ukupno:', suma);

      this.serviceService.addJaja(newJaja).subscribe((data) => {
        console.log('data', data);
      });
    }
  }

  dodajRezanci(proizvod: any, kol: any, cijena: any) {
    let suma = this.getSumPrepJaja();
    let id;
    let email;
    if (kol == 0 || cijena == 0) {
      this.feedback = 'Molimo, odaberite kolicinu';
    } else {
      this.feedback = '';
      let newJaja = {
        proizvod: proizvod,
        cijena: cijena,
        kolicina: kol,
        id: id,
        email: this.authService.userEmail(),
      };
      console.log(newJaja, 'Ukupno:', suma);

      this.serviceService.addJaja(newJaja).subscribe((data) => {
        console.log('data', data);
      });
    }
  }
}
