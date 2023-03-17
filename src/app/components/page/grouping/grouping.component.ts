import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
const CONTENT_DATA = [
  { id: 'c1', title: 'Guidelines' },
  { id: 'c2', title: 'Examples' },
];
@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css'],
})
export class GroupingComponent implements OnInit {
  contentData: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
  }

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
