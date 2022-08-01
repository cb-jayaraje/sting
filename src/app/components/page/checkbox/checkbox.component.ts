import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CheckboxService } from 'src/app/services/checkbox.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

 
  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  checkboxes: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public commonService: CommonService,
    public sanitizer: DomSanitizer, private titleService: Title,
    private checkboxService: CheckboxService
  ) {
    this.titleService.setTitle("Sting - Checkbox");

   }

  ngOnInit(): void {

    this.checkboxes =  this.checkboxService.checkboxDatas;


    from(this.checkboxes)
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
