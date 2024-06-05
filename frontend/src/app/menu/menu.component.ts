import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  connectText:string = "Login";
  toggle = 0;
  constructor(
    private router: Router
  ) {
  }

  navigateToAbout() {
    this.router.navigate(['about']);
  }
}
