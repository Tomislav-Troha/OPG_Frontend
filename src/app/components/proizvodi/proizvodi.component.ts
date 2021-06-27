import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.scss'],
})
export class ProizvodiComponent implements OnInit {
  constructor() {}
  jajca = 'assets/jajca.jpg';
  ukis = 'assets/ukis.jpg';
  rez = 'assets/rezanci.jpg';
  faCartPlus = faCartPlus;

  prepelicja_jaja: any = [
    { proizvod: 'Rifuza - kom.', cijena: 1.25, kolicina: 0 },
    { proizvod: 'pakiranje 12 jaja', cijena: 15.0, kolicina: 0 },
    { proizvod: 'pakiranje 20 jaja', cijena: 25.0, kolicina: 0 },
  ];

  Ukiseljena_prepelicja_jaja: any = [
    { proizvod: 'teglica - 377 ml', cijena: 30.0, kolicina: 0 },
  ];

  rezanci: any = [
    { proizvod: 'uski, 100 g', cijena: 10.0, kolicina: 0 },
    { proizvod: 'široki, 200 g', cijena: 20.0, kolicina: 0 },
  ];

  ngOnInit(): void {}

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
}
