import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

const CONTENT_DATA = [
  { id: 'c1', title: 'Guidelines' },
  { id: 'c2', title: 'Examples' },
];

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css'],
})
export class MetaphorsComponent implements OnInit {
  contentData: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
  }

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
