import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  checkout: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(public sanitizer: DomSanitizer, 
    private titleService: Title,
    private containerService: ContainerService
    ) {
    this.titleService.setTitle("Sting - Containers");
   }
   ngOnInit(): void {
    this.checkout = this.containerService.checkoutDatas;

    from(this.checkout)
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
