import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { ListContainerService } from 'src/app/services/list-containers.service';
import * as data from './../../../data-page.json';

@Component({
  selector: 'app-list-containers',
  templateUrl: './list-containers.component.html',
  styleUrls: ['./list-containers.component.css']
})
export class ListContainersComponent implements OnInit {


  componentData:any = data;


  
  listContainers: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    private listContainerService: ListContainerService,
    public sanitizer: DomSanitizer, private titleService: Title,
  ) { 
    this.titleService.setTitle("Sting - List Containers");
  }

  ngOnInit(): void {
    this.listContainers =  this.listContainerService.listContainerDatas;

    from(this.listContainers)
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
       // console.log(this.convertedDatas)
     })
  }
  

}
