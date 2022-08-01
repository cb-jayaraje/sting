import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { TabService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  
  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  tabs: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public commonService: CommonService,
    public sanitizer: DomSanitizer, private titleService: Title,
    private tabService: TabService
  ) {
    this.titleService.setTitle("Sting - Tabs");

   }

  ngOnInit(): void {

    this.tabs =  this.tabService.tabDatas;


    from(this.tabs)
    .pipe(
      map((data:any) => {
        this.html = data.code;
      //  console.log(this.html)
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
     })
  }

}
