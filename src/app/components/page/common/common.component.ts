import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HighlightService } from 'src/app/services/high-light.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {


  @Input() activeTab = '';
  @Input() codePreview = '';
  @Input() title:any;
  @Input() codeHtml ='';
  @Input() mainTitle = '';

  previewHeight = ''

  withLabelactiveTab = "preview"
  previewScreenSize =  ""
  highlighted: boolean = false;

  withLabelcodePreview = '';

  codePreviewRec = '';


  constructor( private highlightService: HighlightService, private titleService: Title) { 
    
  }

  ngAfterViewChecked() {
    
    if(this.highlighted == false){
      this.highlightService.highlightAll();
    }

    this.highlighted = true;

  }

  ngOnInit(): void {

    this.codePreviewRec = this.codePreview;

    if(this.mainTitle === 'select_menus'){
      this.previewHeight = 'h-52 min-h-full'
    }else if (this.mainTitle === 'dropdowns'){
      // this.previewHeight = 'h-72 min-h-full'
    }
  
  }

}
