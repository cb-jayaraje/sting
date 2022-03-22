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
      {title: "Badges", noOfComponents: 2, image: `badges.png`, link: 'page/badges'},
      {title: "Dropdowns", noOfComponents: 2, image: `dropdowns.png`, link: 'page/dropdowns'},
      {title: "Buttons", noOfComponents: 1, image: `buttons.png`, link: 'page/buttons'},
      
      ];
  }

}
