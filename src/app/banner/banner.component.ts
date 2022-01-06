import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banner: any;
  constructor() { }

  ngOnInit(): void {

    this.banner = [
      {
        title: "Your title can be long and descriptive",
        content: "Cursuspenatisaccum ut curabitur nulla tellus tor<br />ames a in curabitur pede. Idet mollisi eros dis<br />orci congue elis et curabitur.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/550x440/333333/ffffff.png",
      },
      {
        title: "Your title can be long and descriptive",
        content: "Cursuspenatisaccum ut curabitur nulla tellus tor<br />ames a in curabitur pede. Idet mollisi eros dis<br />orci congue elis et curabitur.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/550x440/333333/ffffff.png",
      },
      {
        title: "Your title can be long and descriptive",
        content: "Cursuspenatisaccum ut curabitur nulla tellus tor<br />ames a in curabitur pede. Idet mollisi eros dis<br />orci congue elis et curabitur.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/550x440/333333/ffffff.png",
      },
      {
        title: "Your title can be long and descriptive",
        content: "Cursuspenatisaccum ut curabitur nulla tellus tor<br />ames a in curabitur pede. Idet mollisi eros dis<br />orci congue elis et curabitur.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/550x440/333333/ffffff.png",
      },
      {
        title: "Your title can be long and descriptive",
        content: "Cursuspenatisaccum ut curabitur nulla tellus tor<br />ames a in curabitur pede. Idet mollisi eros dis<br />orci congue elis et curabitur.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/550x440/333333/ffffff.png",
      },    
    ]

  }

}
