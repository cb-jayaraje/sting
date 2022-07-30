import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {



  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  modals: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    private modalService: ModalService,
    public commonService: CommonService,
    public sanitizer: DomSanitizer, private titleService: Title,
  ) { 
    this.titleService.setTitle("Sting - Modals");
  }

  ngOnInit(): void {

    this.modals =  this.modalService.modalsdata;


    from(this.modals)
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
