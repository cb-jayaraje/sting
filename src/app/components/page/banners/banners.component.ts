import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { BannersService } from 'src/app/services/banners.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  htmlPre = '';
  compUnescape = '';

  banners: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private commonService: CommonService,
    private bannersService: BannersService
  ) { 
    this.titleService.setTitle('Sting - Banners');
  }

  ngOnInit(): void {
    this.banners = this.bannersService.bannerDatas;
    
    from(this.banners)
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
