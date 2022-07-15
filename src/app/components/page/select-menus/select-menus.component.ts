import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title, SafeHtml } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { SelectMenuServices } from 'src/app/services/select-menu.service';
import * as data from './../../../data.json';

@Component({
  selector: 'app-select-menus',
  templateUrl: './select-menus.component.html',
  styleUrls: ['./select-menus.component.css']
})
export class SelectMenusComponent implements OnInit {
  
  componentData:any = data;

htmlPre = '';
compUnescape='';

selectMenus: any;
convertedDatas: any = [];
html: SafeHtml = '';

constructor(public sanitizer: DomSanitizer, private titleService: Title, private selectMenuService: SelectMenuServices) {
  this.titleService.setTitle("Sting - Select Menus");
 }

  ngOnInit(): void {
    this.selectMenus = this.selectMenuService.selectMenuDatas;

    //this.convertedDatas = this.selectMenus;

    // console.log(this.convertedDatas)
    from(this.selectMenus)
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
