import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
