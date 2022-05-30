import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-primeng-example',
  templateUrl: './primeng-example.component.html',
  styleUrls: ['./primeng-example.component.scss']
})
export class PrimengExampleComponent implements OnInit {

  items!: MenuItem[];

  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'PrimeNG example' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }

}
