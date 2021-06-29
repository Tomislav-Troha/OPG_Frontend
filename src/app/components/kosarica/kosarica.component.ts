import { Component, OnInit } from '@angular/core';
import { Properties } from '../../Properties';
import { ServiceService } from '../../-service.service';

@Component({
  selector: 'app-kosarica',
  templateUrl: './kosarica.component.html',
  styleUrls: ['./kosarica.component.scss'],
})
export class KosaricaComponent implements OnInit {
  kosarica: Properties[] = [];

  currDiv: string = 'kartica';

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService
      .getKosarica()
      .subscribe((prepJaja) => (this.kosarica = prepJaja));
  }

  showDiv(divVal: string) {
    //console.log(divVal);
    this.currDiv = divVal;
  }

  getSum(): number {
    let sum = 0;
    for (let i = 0; i < this.kosarica.length; i++) {
      sum += this.kosarica[i].cijena * this.kosarica[i].kolicina;
    }

    return sum;
  }

  getKolicina() {
    return this.kosarica.length;
  }

  refreshKosarica() {
    this.serviceService.getKosarica().subscribe((data) => {
      this.kosarica = data;
      console.log(data);
    });
  }

  onDelete(id: any) {
    {
      this.serviceService.deleteKosarica(id).subscribe(
        () => this.refreshKosarica(),
        (err) => console.log(err)
      );
    }
  }
}
