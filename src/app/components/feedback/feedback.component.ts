import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackComponents:any = [];
  imageUrl= "./assets/images/"

  constructor() { }

  ngOnInit(): void {

    this.feedbackComponents = [
      {title: "Alerts", noOfComponents: 6, image: `alerts.png`, link: 'page/alerts'},
      
      ];
  }
}
