import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seletores',
  templateUrl: './seletores.component.html',
  styleUrls: ['./seletores.component.scss']
})
export class SeletoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
