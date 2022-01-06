import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-social',
  templateUrl: './header-social.component.html',
  styleUrls: ['./header-social.component.scss']
})
export class HeaderSocialComponent implements OnInit {
  nav: any;
  constructor() { }

  ngOnInit(): void {
    this.nav = [
      {
        iconName: "fa-linkedin",
        url: "",
        class: "in"
      },
      {
        iconName: "fa-twitter",
        url: "",
        class: "tw"
      },
      {
        iconName: "fa-pinterest",
        url: "",
        class: "pt"
      },
      {
        iconName: "fa-google-plus",
        url: "",
        class: "gp"
      },
      {
        iconName: "fa-rss",
        url: "",
        class: "rss"
      }
    ]
  }

}
