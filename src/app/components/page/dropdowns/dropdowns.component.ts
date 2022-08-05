import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { DropdownsService } from 'src/app/services/dropdowns.service';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  dropdowns: any;
  convertedDatas: any = [];
  html: SafeHtml = '';
  

  constructor(public sanitizer: DomSanitizer, private titleService: Title, private dropdownService: DropdownsService) {
    this.titleService.setTitle("Sting - Dropdowns");
    
   }

  ngOnInit(): void {

    this.dropdowns =  this.dropdownService.badgeDatas;

    from(this.dropdowns)
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
