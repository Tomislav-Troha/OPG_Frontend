import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../-service.service';
import { Properties } from '../../Properties';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  kosarica: Properties[] = [];
  private timerObserver: any = Subscription;

  constructor(
    private serviceService: ServiceService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getSumKosara();
    let numbers = timer(2000, 5000);
    this.timerObserver = numbers.subscribe(() => {
      this.getSumKosara();
    });
  }
  ngOnDestroy() {
    this.timerObserver.unsubscribe();
  }

  getSumKosara() {
    this.serviceService.getKosarica().subscribe((data) => {
      //console.log('', data);
      this.kosarica = data;
      this.cdRef.detectChanges();
    });
  }
}
