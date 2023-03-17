import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/operators';
import { BadgesService } from 'src/app/services/badges.service';
import { CommonService } from 'src/app/services/common.service';

const CONTENT_DATA = [
  { id: 'c1', title: 'Badges' },
  { id: 'c2', title: 'Guidelines' },
];

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
})
export class BadgesComponent implements OnInit {
  contentData: any;
  componentData: any = [];

  htmlPre = '';
  compUnescape = '';

  badges: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private inputgroupService: BadgesService,
    private commonService: CommonService
  ) {
    this.titleService.setTitle('Sting - Badges');
  }

  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
    this.badges = this.inputgroupService.badgeDatas;

    from(this.badges)
      .pipe(
        map((data: any) => {
          this.html = data.code;
          // console.log(this.html)
          const datas = {
            id: data.id,
            title: data.title,
            code: this.html,
          };
          console.log(datas);

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
