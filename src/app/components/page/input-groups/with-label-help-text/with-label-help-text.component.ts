import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/high-light.service';

@Component({
  selector: 'app-with-label-help-text',
  templateUrl: './with-label-help-text.component.html',
  styleUrls: ['./with-label-help-text.component.css']
})
export class WithLabelHelpTextComponent implements OnInit {

  activeTab = "preview"
  previewScreenSize =  ""
  highlighted: boolean = false;
  codePreview = '';

  constructor(
    private highlightService: HighlightService
  ) { }

    /**
   * Highlight blog post when it's ready
   */
     ngAfterViewChecked() {
      if (!this.highlighted) {
        this.highlightService.highlightAll();
        this.highlighted = true;
      }
    }
  

  ngOnInit(): void {
    this.codePreview = '<div class=\"form-control\">\r\n<label for=\"email\" class=\"label\">Email<\/label>\r\n<div class=\"mt-1\">\r\n<input type=\"email\" class=\"input\" name=\"email\" id=\"email\" placeholder=\"you@example.com\" aria-describedby=\"email-description\">\r\n<\/div>\r\n<p class=\"help-text\" id=\"email-description\">We\'ll only use this for spam.<\/p>\r\n<\/div>'
  }



}
