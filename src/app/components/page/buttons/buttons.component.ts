import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { ButtonService } from 'src/app/services/buttons.service';
import { inputGroupsService } from 'src/app/services/input-groups.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {





htmlPre = '';
compUnescape='';

buttons: any;
convertedDatas: any = [];
html: SafeHtml = '';

  
constructor(public sanitizer: DomSanitizer, private titleService: Title, private buttonServices: ButtonService) {
  this.titleService.setTitle("Sting - Buttons");
 }
  ngOnInit(): void {
    this.buttons = this.buttonServices.buttonDatas

    from(this.buttons)
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
