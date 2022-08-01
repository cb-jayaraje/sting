import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { CommonService } from 'src/app/services/common.service';
import { DropdownsService } from 'src/app/services/dropdowns.service';
import { BadgesService } from 'src/app/services/badges.service';
import { ButtonService } from 'src/app/services/buttons.service';
import { TabService } from 'src/app/services/tabs.service';
import { getNum } from 'src/app/util';
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
      {title: "Badges", noOfComponents: getNum(BadgesService), image: `badges.png`, link: 'page/badges'},
      {title: "Dropdowns", noOfComponents: getNum(DropdownsService), image: `dropdowns.png`, link: 'page/dropdowns'},
      {title: "Buttons", noOfComponents: getNum(ButtonService), image: `buttons.png`, link: 'page/buttons'},
      {title: "Tabs", noOfComponents: getNum(TabService), image: `tabs.png`, link: 'page/tabs'},
      
      ];
  }

}
