import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  pagination: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(public sanitizer: DomSanitizer, 
    private titleService: Title,
    private paginationService: PaginationService
    
    ) {
    this.titleService.setTitle("Sting - Paginations");
   }

   ngOnInit(): void {
    this.pagination = this.paginationService.paginationData;

    from(this.pagination)
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
