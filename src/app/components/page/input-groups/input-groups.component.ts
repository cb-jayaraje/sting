import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title, SafeHtml } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { inputGroupsService } from 'src/app/services/input-groups.service';
import * as data from './../../../data.json';


// interface componentData {

// }

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.css']
})
export class InputGroupsComponent implements OnInit {


componentData:any = data;

htmlPre = '';
compUnescape='';

inputGroups: any;
convertedDatas: any = [];
html: SafeHtml = '';

  
constructor(public sanitizer: DomSanitizer, private titleService: Title, private inputgroupService: inputGroupsService) {
  this.titleService.setTitle("Sting - Input Groups");
 }

  ngOnInit(): void {



   this.inputGroups =  this.inputgroupService.inputGroupDatas;
   

   from(this.inputGroups)
   .pipe(
     map((data:any) => {
       this.html = data.code;
       console.log(this.html)
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
