import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public openedMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toogleMenu(): void {
    this.openedMenu = this.openedMenu ? false : true;
  }

  public clickedMenu() : void {
    this.openedMenu = false;
  }

}
