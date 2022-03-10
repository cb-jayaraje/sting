import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HighlightService } from 'src/app/services/high-light.service';

@Component({
  selector: 'app-alerts-common',
  templateUrl: './alerts-common.component.html',
  styleUrls: ['./alerts-common.component.css']
})
export class AlertsCommonComponent implements OnInit {

  @Input() activeTab = '';
  @Input() codePreview = '';
  @Input() title:any;
  @Input() codeHtml ='';

  withLabelactiveTab = "preview"
  previewScreenSize =  ""
  highlighted: boolean = false;


  constructor( private highlightService: HighlightService, private titleService: Title) { 
    
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;
  }

  ngOnInit(): void {
    
  }


}
