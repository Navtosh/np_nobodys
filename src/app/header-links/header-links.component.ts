import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  styleUrls: ['./header-links.component.scss']
})
export class HeaderLinksComponent implements OnInit {
  nav: any;
  constructor() { }

  ngOnInit(): void {
    this.nav = [
      {
        name: "Sign Up",
        url: "",
        class: ""
      },
      {
        name: "Login",
        url: "",
        class: ""
      },
      {
        name: "RSS Feeds",
        url: "",
        class: ""
      },
      {
        name: "Archived News",
        url: "",
        class: ""
      }
    ]
  }

}
