import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links-footer',
  templateUrl: './quick-links-footer.component.html',
  styleUrls: ['./quick-links-footer.component.scss']
})
export class QuickLinksFooterComponent implements OnInit {
  nav: any;
  constructor() { }

  ngOnInit(): void {
    this.nav = [
      {
        name: "Lorem ipsum dolor sit",
        url: "",
        class: ""
      },
      {
        name: ">Amet consectetur",
        url: "",
        class: ""
      },
      {
        name: "Praesent vel sem id",
        url: "",
        class: ""
      },
      {
        name: "Curabitur hendrerit est",
        url: "",
        class: ""
      },
      {
        name: "Aliquam eget erat nec sapien",
        url: "",
        class: ""
      },
      {
        name: "Cras id augue nunc",
        url: "",
        class: ""
      },
      {
        name: "In nec justo non",
        url: "",
        class: ""
      },
      {
        name: "Vivamus mollis enim ut",
        url: "",
        class: ""
      },
      {
        name: "Curabitur hendrerit est",
        url: "",
        class: ""
      },
      {
        name: "Sed a nulla urna",
        url: "",
        class: ""
      }
    ]
  }

}
