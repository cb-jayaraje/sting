import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

 
  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  toggles: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public commonService: CommonService,
    public sanitizer: DomSanitizer, private titleService: Title,
    private toggleService: ToggleService
  ) {
    this.titleService.setTitle("Sting - Radio Buttons");

   }

  ngOnInit(): void {

    this.toggles =  this.toggleService.toggleDatas;


    from(this.toggles)
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
