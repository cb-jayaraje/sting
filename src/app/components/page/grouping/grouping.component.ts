import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css'],
})
export class GroupingComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
