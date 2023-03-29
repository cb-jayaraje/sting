import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe, Subscription, take } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { RightPanelService } from 'src/app/services/right-panel.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit, OnDestroy {
  pageTitle: Observable<string> | undefined;
  private pageTitleObsSub: Subscription | undefined;
  private panelContentObsSub: Subscription | undefined;
  title: string = '';
  contentData: any;
  contentPage: any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private rightPanelService: RightPanelService
  ) {}

  ngOnInit(): void {
    const title = this.rightPanelService.getUrlLastValue(this.router.url);

    var titleChangeToUpper = title.charAt(0).toUpperCase() + title.slice(1);

    this.contentData = this.rightPanelService.contentData;

    this.panelContentObsSub = this.rightPanelService
      .getContentPage()
      .pipe()
      .subscribe((pageName: any) => {
        this.contentData.map((data: any) => {
          if (data.title == pageName) {
            this.contentPage = data.menu;
            console.log('content ', this.contentPage);
          } else {
            //this.contentPage = '';
          }
        });

        // const check = this.contentData.filter((dd: any) => {
        //   return dd.title == pageName;
        // });

        // console.log(check.length);

        // if (check.length > 0) {
        //   console.log('yes');
        //   this.contentData = check.menu;
        // } else {
        //   //this.contentData = '';
        //   console.log('no');
        // }
      });

    this.pageTitleObsSub = this.commonService
      .getPageTitle()
      .pipe()
      .subscribe((data) => {
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
  ngOnDestroy(): void {
    this.pageTitleObsSub?.unsubscribe();
    this.panelContentObsSub?.unsubscribe();
  }
}
