import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, map } from 'rxjs';
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
  
constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {



   this.inputGroups = this.componentData.input_groups;
   

   from(this.inputGroups)
   .pipe(
     map((data:any) => {
       const datas = {
        id: data.id,
        title: data.title,
        code: data.code
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
