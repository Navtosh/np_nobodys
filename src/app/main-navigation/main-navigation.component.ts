import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  nav: any;
  constructor() { }

  ngOnInit(): void {
    this.nav = [
      {
        name: "HOME PAGE",
        url: "",
        class: "active"
      },
      {
        name: "STYLE DEMO",
        url: "",
        class: ""
      },
      {
        name: "FULL WIDTH",
        url: "",
        class: ""
      },
      {
        name: "DROPDOW",
        url: "",
        class: ""
      },
      {
        name: "GALLERY",
        url: "",
        class: ""
      },
      {
        name: "PORTFOLIO",
        url: "",
        class: ""
      },
      {
        name: "LINK TEXT",
        url: "",
        class: ""
      },
      {
        name: "LONG LINK TEXT",
        url: "",
        class: ""
      }
    ]
  }

}
