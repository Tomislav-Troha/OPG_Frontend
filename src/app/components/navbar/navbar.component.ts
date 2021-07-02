import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../-service.service';
import { Properties } from '../../Properties';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  kosarica: Properties[] = [];

  constructor(
    private serviceService: ServiceService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getSumKosara();
  }

  getSumKosara() {
    this.serviceService.getKosaricaProizvod().subscribe((data) => {
      //console.log('', data);
      this.kosarica = data;
    });
  }
}
