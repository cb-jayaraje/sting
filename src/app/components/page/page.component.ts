import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { RightPanelService } from 'src/app/services/right-panel.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  pageTitle: Observable<string> | undefined;
  title: string = '';
  contentData: any;
  contentPage: any;
  pageName$: Observable<string> | undefined;
  constructor(
    private commonService: CommonService,
    private router: Router,
    private rightPanelService: RightPanelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var n = this.router.url.lastIndexOf('/');
    var title = this.router.url.substring(n + 1);
    var titleChangeToUpper = title.charAt(0).toUpperCase() + title.slice(1);

    this.contentData = this.rightPanelService.contentData;

    this.rightPanelService.getContentPage().subscribe((pageName: any) => {
      this.contentData.map((data: any) => {
        if (data.title == pageName) {
          console.log('yes mat ', data.menu);
          this.contentPage = data.menu;
        }

        console.log(this.contentPage);
      });
    });

    this.pageTitle = this.commonService.getPageTitle();
    this.pageTitle.pipe().subscribe((data) => {
      this.title = data;
      if (this.title === '') {
        this.title = titleChangeToUpper;
      }
    });
  }

  changeTheme(theme: string): void {
    this.commonService.setTheme(theme);
  }

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
