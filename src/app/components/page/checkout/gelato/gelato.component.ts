import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-gelato',
  templateUrl: './gelato.component.html',
  styleUrls: ['./gelato.component.css']
})
export class GelatoComponent implements OnInit {

  componentData:any = [];

  htmlPre = '';
  compUnescape='';
  
  checkout: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(public sanitizer: DomSanitizer, private titleService: Title, private checkoutService: CheckoutService) {
    this.titleService.setTitle("Sting - Checkout");
   }

  ngOnInit(): void {
    this.checkout = this.checkoutService.checkoutDatas;

    from(this.checkout)
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
