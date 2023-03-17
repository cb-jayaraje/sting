import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { ButtonService } from 'src/app/services/buttons.service';
import { CommonService } from 'src/app/services/common.service';
import { inputGroupsService } from 'src/app/services/input-groups.service';

const CONTENT_DATA = [
  { id: 'c1', title: 'Button' },
  { id: 'c2', title: 'Guidelines' },
];

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  htmlPre = '';
  compUnescape = '';

  buttons: any;
  convertedDatas: any = [];
  html: SafeHtml = '';
  contentData: any;

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private buttonServices: ButtonService,
    private commonService: CommonService
  ) {
    this.titleService.setTitle('Sting - Buttons');
  }
  ngOnInit(): void {
    this.contentData = CONTENT_DATA;
    this.buttons = this.buttonServices.buttonDatas;

    this.contentData = CONTENT_DATA;

    from(this.buttons)
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
