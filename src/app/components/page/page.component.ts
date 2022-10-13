import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageTitle: Observable<string> | undefined;
  title: string='';

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.pageTitle = this.commonService.getPageTitle();
    this.pageTitle.subscribe(data => this.title = data)
  }

  changeTheme(theme: string): void {
    this.commonService.setTheme(theme)
  }



}
