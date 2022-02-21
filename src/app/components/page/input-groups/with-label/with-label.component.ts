import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/high-light.service';

@Component({
  selector: 'app-with-label',
  templateUrl: './with-label.component.html',
  styleUrls: ['./with-label.component.css']
})
export class WithLabelComponent implements OnInit {
  activeTab = "preview"
  withLabelactiveTab = "preview"
  previewScreenSize =  ""
  highlighted: boolean = false;
  codePreview = '';
  withLabelcodePreview = '';

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
    this.codePreview = '<div class=\"form-control\">\r\n        <label for=\"email\" class=\"label\">Email<\/label>\r\n        <div class=\"mt-1\">\r\n          <input type=\"email\" name=\"email\" id=\"email\" class=\"input\" placeholder=\"you@example.com\">\r\n        <\/div>\r\n      <\/div>'
  }

}
