import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import * as data from './../../../data.json';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  componentData:any = data;

htmlPre = '';
compUnescape='';
colorToken = "warning"

alerts: any;
convertedDatas: any = [];





  
constructor(public sanitizer: DomSanitizer, private titleService: Title) {
  this.titleService.setTitle("Sting - Alerts");
 }

  ngOnInit(): void {

   this.alerts = this.componentData.alerts;

   from(this.alerts)
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

//     this.testCode = ` <div class="alert ${this.colorToken}">
//     <div class="flex">
//       <div class="flex-shrink-0">
//         <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//           <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
//         </svg>
//       </div>
//       <div class="ml-3 flex-1 md:flex md:justify-between">
//         <p class="description-only text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
//         <p class="mt-3 description-only md:mt-0 md:ml-6">
//           <a href="#" class="alert-a text-blue-700 hover:text-blue-600">Details <span aria-hidden="true">&rarr;</span></a>
//         </p>
//       </div>
//     </div>
//   </div>`
// ;

  }

}
