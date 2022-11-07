import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {


  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  steps: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public commonService: CommonService, public stepService: StepsService,
    public sanitizer: DomSanitizer, private titleService: Title,
  ) { 
    this.titleService.setTitle("Sting - Steps");
  }

  ngOnInit(): void {
    this.steps = this.stepService.stepDatas;

    from(this.steps)
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
