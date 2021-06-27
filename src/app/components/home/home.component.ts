import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = 'assets/kokos.jpg'
  Slika1 = 'assets/jaja.jpg'
  Slika2 = 'assets/prepelica.jpg'
  Slika3 = 'assets/ukiseljena.jpg'
  Slika4 = 'assets/proizvodi.jpg'
  Slika5 = 'assets/ribafish.jpg'
  Slika6 = 'assets/proizvodi_slike.png'


  constructor() { }

  ngOnInit(): void {
  }

}
