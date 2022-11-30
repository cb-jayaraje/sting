import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { PageHeadingService } from 'src/app/services/page-heading.service';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css']
})
export class PageHeadingComponent implements OnInit {

  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  pageHeading: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(public sanitizer: DomSanitizer, 
    private titleService: Title,
    private pageHeadingService: PageHeadingService
    
    ) {
    this.titleService.setTitle("Sting - Page Headings");
   }

   ngOnInit(): void {
    this.pageHeading = this.pageHeadingService.pageHeadingDatas;

    from(this.pageHeading)
    .pipe(
      map((data:any) => {
        this.html = data.code;
        // console.log(this.html)
        const datas = {
         id: data.id,
         title: data.title,
         code:this.html
        }
 
        return datas;
 
        
        
      })
    )
     .subscribe(dataRes => {
       this.convertedDatas.push(dataRes)
       // console.log(this.convertedDatas)
     })

  }

}
