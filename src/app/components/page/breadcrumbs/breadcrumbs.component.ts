import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { BreadcrumbService } from 'src/app/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private breadcrumbService: BreadcrumbService
  ) {
    this.titleService.setTitle('Sting - Breadcrumbs');
  }

  ngOnInit(): void {
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
}
