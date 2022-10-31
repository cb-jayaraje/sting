import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { RadioGroupService } from 'src/app/services/radio-groups.service';

@Component({
  selector: 'app-radio-groups',
  templateUrl: './radio-groups.component.html',
  styleUrls: ['./radio-groups.component.css']
})
export class RadioGroupsComponent implements OnInit {


  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  radioGroups: any;
  convertedDatas: any = [];
  html: SafeHtml = '';
  radioCards='item1';
  radioTimeFrame = 'item1';
  radioCompact = 'item1';
  radioStacked = "item1";
  pricingPlan= 'Business';
  listPanel = 'Public access';

  constructor(
    public commonService: CommonService,
    public sanitizer: DomSanitizer, private titleService: Title,
    private RadioGroupService: RadioGroupService
  ) {
    this.titleService.setTitle("Sting - Radio Buttons");

   }

  ngOnInit(): void {

    this.radioGroups =  this.RadioGroupService.radioGropuDatas;


    from(this.radioGroups)
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

    //  if(dataRes.id !== "radio_5" && dataRes.id !== "radio_6") {
    //   this.convertedDatas.push(dataRes)
    //  }

     
    this.convertedDatas.push(dataRes)
      
        // console.log(this.convertedDatas)
     })
     
  }

  onClick(item = 'item1') {
    this.radioCards = item
    
  }

  onClickTimeFrame(item = 'item1') {
    this.radioTimeFrame = item
  }

  onClickCompact(item = 'item1') {
    this.radioCompact = item
  }


  onClickStacked(item = 'item1') {
    this.radioStacked = item
  }

  choosePricing(event = '') {
    console.log(event)
    this.pricingPlan = event;
  }

  
}
