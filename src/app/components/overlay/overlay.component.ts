import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ModalService } from 'src/app/services/modal.service';
import { getNum } from 'src/app/util';
import * as data from './../../data-page.json';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  overlayCompopnents:any = [];
  overlaydata: any = data;
  imageUrl= "./assets/images/";
  path = ''


  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {

    this.path = this.commonService.componentPath;
    
    // this.overlayCompopnents = this.overlaydata.overlays;
    this.overlayCompopnents = [
      {"title": "Modals", "noOfComponents": getNum(ModalService), "image": "modals.png", "link": "modals"}
  ];
    
  }
}
