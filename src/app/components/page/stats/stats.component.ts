import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { StatsService } from 'src/app/services/stats.serivce';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private statsService: StatsService
  ) {
    this.titleService.setTitle('Sting - Stats');
  }

  ngOnInit(): void {
    from(this.statsService.statDatas)
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
