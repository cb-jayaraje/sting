import { Component, OnInit } from '@angular/core';
const CONTENT_DATA = [{}];
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  contentData: any;
  constructor() {}

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
  }
}
