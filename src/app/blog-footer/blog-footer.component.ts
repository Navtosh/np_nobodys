import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.scss']
})
export class BlogFooterComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
    this.data= [
      {
        title : 'Post Title',
        adminName: 'Admin',
        domain: 'domainname.com',
        day: 'Friday',
        date: '6th April 2000',
        containr: ' Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.',
        url:'',
      },
      {
        title : 'Post Title',
        adminName: 'Admin',
        domain: 'domainname.com',
        day: 'Friday',
        date: '6th April 2000',
        containr: ' Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.',
        url:'',
      }
    ]
  }

}
