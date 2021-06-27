import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kosarica',
  templateUrl: './kosarica.component.html',
  styleUrls: ['./kosarica.component.scss'],
})
export class KosaricaComponent implements OnInit {
  proizvodi: any = [
    { proizvod: 'Jaja - 15 kom.', cijena: 20.0, kolicina: 1 },
    { proizvod: 'Kisela jaja', cijena: 15.0, kolicina: 1 },
    { proizvod: 'Jaja-rifuza', cijena: 1.5, kolicina: 1 },
    { proizvod: 'Meso', cijena: 30, kolicina: 1 },
  ];

  dostava: number = 10;

  constructor() {}

  ngOnInit(): void {}

  getSum(): number {
    let sum = 0;
    for (let i = 0; i < this.proizvodi.length; i++) {
      sum += this.proizvodi[i].cijena * this.proizvodi[i].kolicina;
    }

    return sum + this.dostava;
  }
}
