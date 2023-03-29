import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
const CONTENT_DATA = [
  { id: 'c1', title: 'Brand palette' },
  { id: 'c2', title: 'Core UI palette' },
  { id: 'c3', title: 'Semantic palette' },
];
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  contentData: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
  }

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
