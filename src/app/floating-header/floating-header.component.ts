import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-header',
  templateUrl: './floating-header.component.html',
  styleUrls: ['./floating-header.component.scss']
})
export class FloatingHeaderComponent implements OnInit {


  showBar: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

toggleBar() {
    this.showBar = !this.showBar;
}

}
