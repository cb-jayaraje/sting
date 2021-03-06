import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HighlightService } from 'src/app/services/high-light.service';

@Component({
  selector: 'app-input-common',
  templateUrl: './input-common.component.html',
  styleUrls: ['./input-common.component.css']
})
export class InputCommonComponent implements OnInit {

  @Input() activeTab = '';
  @Input() codePreview = '';
  @Input() title:any;
  @Input() codeHtml ='';

 
  withLabelactiveTab = "preview"
  previewScreenSize =  ""
  highlighted: boolean = false;

  withLabelcodePreview = '';

  constructor( private highlightService: HighlightService, private titleService: Title) { 
    
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;
  }

  ngOnInit(): void {
    
  }

}
