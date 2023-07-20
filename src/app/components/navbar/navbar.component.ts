import { style, transition, trigger, animate, state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('inOutTrigger', [
      state('out',style({marginTop: '-110%'})),
      state('in',style({marginTop: '0%'})),
      transition('in => out', [
        animate('800ms ease-in')
      ]),
      transition('out => in', [
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class NavbarComponent {
  navstate = 'out';

  toggleNavbar() {
    this.navstate = (this.navstate==='in')?'out':'in';
  }
}
