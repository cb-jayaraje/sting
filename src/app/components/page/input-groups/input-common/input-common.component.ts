import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-common',
  templateUrl: './input-common.component.html',
  styleUrls: ['./input-common.component.css']
})
export class InputCommonComponent implements OnInit {

  @Input() activeTab = '';
  @Input() codePreview = '';
  @Input() title= '';

 
  withLabelactiveTab = "preview"
  previewScreenSize =  ""
  highlighted: boolean = false;

  withLabelcodePreview = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.activeTab)
  }

}
