import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { BreadcrumbService } from 'src/app/services/breadcrumbs.service';
import { CommonService } from 'src/app/services/common.service';

const CONTENT_DATA = [
  { id: 'c1', title: 'Breadcrumbs' },
  { id: 'c2', title: 'Guidelines' },
];

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  convertedDatas: any = [];
  html: SafeHtml = '';
  contentData: any;
  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private breadcrumbService: BreadcrumbService,
    private commonService: CommonService
  ) {
    this.titleService.setTitle('Sting - Breadcrumbs');
  }

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
    from(this.breadcrumbService.breadcrumbsData)
      .pipe(
        map((data: any) => {
          this.html = data.code;
          // console.log(this.html)
          const datas = {
            id: data.id,
            title: data.title,
            code: this.html,
          };

          return datas;
        })
      )
      .subscribe((dataRes) => {
        this.convertedDatas.push(dataRes);
        // console.log(this.convertedDatas)
      });
  }

  scrollTo(id: string) {
    this.commonService.scroll(id);
  }
}
