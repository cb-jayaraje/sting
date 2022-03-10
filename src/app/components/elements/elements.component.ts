import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { CommonService } from 'src/app/services/common.service';
// import * as data from './../../../data.json';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  

  elementComponents:any = [];
  
  constructor( private commonServie: CommonService) { }

  ngOnInit(): void {
    this.elementComponents = [
      {title: "Badges", noOfComponents: 7, image: `badges.png`, link: 'page/badges'},
      
      ];
  }

}
