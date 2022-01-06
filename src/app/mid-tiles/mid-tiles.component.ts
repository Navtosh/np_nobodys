import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-tiles',
  templateUrl: './mid-tiles.component.html',
  styleUrls: ['./mid-tiles.component.scss']
})
export class MidTilesComponent implements OnInit {
  tilesData: any;
  constructor() { }

  ngOnInit(): void {
    this.tilesData = [
      {
        title: "Vivamuslibero Augue",
        url: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/85x80/333333/ffffff.png",
      }, 
      {
        title: "Vivamuslibero Augue",
        url: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/85x80/333333/ffffff.png",
      }, 
      {
        title: "Vivamuslibero Augue",
        url: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/85x80/333333/ffffff.png",
      }, 
      {
        title: "Vivamuslibero Augue",
        url: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.",
        buttonName: "READ MORE",
        imgUrl: "https://dummyimage.com/85x80/333333/ffffff.png",
      }, 
    ]
  }

}
