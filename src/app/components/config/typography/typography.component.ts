import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { TypographyServices } from 'src/app/services/typography.service';
import * as data from './../../../data.json';
const CONTENT_DATA = [
  { id: 'c1', title: 'Typography' },
  { id: 'c2', title: 'Guidelines' },
];

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
})
export class TypographyComponent implements OnInit {
  componentData: any = data;
  contentData: any;
  htmlPre = '';
  compUnescape = '';

  typoDatas: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    public typoService: TypographyServices,
    private commonService: CommonService
  ) {
    this.titleService.setTitle('Sting - Typography');
  }

  ngOnInit(): void {
    this.typoDatas = this.typoService.typographyDatas;
    this.contentData = CONTENT_DATA;

    //this.convertedDatas = this.selectMenus;

    // console.log(this.convertedDatas)
    from(this.typoDatas)
      .pipe(
        map((data: any) => {
          this.html = data.code;
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
