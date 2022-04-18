import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import * as data from './../../data-page.json';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  layoutComponents:any = [];
  layoutData: any = data;
  imageUrl= "./assets/images/";
  path = ''

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {

    this.path = this.commonService.componentPath;
    
    this.layoutComponents = this.layoutData.layout;
    
  }

}
