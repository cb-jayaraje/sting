import { Component, OnInit } from '@angular/core';

const CONTENT_DATA = [
  { id: 'c1', title: 'What is Sting?' },
  { id: 'c2', title: 'Who primarily uses Sting?' },
  { id: 'c3', title: 'How are we benefitted from Sting?' },
  { id: 'c4', title: 'What happens to Classic and Leap UI?' },
];

@Component({
  selector: 'app-about-sting',
  templateUrl: './about-sting.component.html',
  styleUrls: ['./about-sting.component.css'],
})
export class AboutStingComponent implements OnInit {
  contentData: any;

  constructor() {}

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
  }
}
