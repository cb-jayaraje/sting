import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { StackedListsService } from 'src/app/services/stacked-lists.service';

@Component({
  selector: 'app-stacked-lists',
  templateUrl: './stacked-lists.component.html',
  styleUrls: ['./stacked-lists.component.css']
})
export class StackedListsComponent implements OnInit {

  htmlPre = '';
  compUnescape='';

convertedDatas: any = [];
html: SafeHtml = '';
stackedLists:any;

  constructor(
    public stackedListsService: StackedListsService, public sanitizer: DomSanitizer, private titleService: Title,
  ) { 
    this.titleService.setTitle("Sting - Stacked Lists");
  }

  ngOnInit(): void {
    this.stackedLists = this.stackedListsService.stackedListsData;

    from(this.stackedLists)
    .pipe(
      map((data:any) => {
        this.html = data.code;
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
