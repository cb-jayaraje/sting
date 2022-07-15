import { Component, OnInit } from '@angular/core';
import { getNum } from 'src/app/util';
import { AlertService } from 'src/app/services/alert.service';
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
      {title: "Alerts", noOfComponents: getNum(AlertService), image: `alerts.png`, link: 'page/alerts'},
      
      ];
  }
}
