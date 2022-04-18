import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { SignInFormsService } from 'src/app/services/sign-in-forms.service';

@Component({
  selector: 'app-sign-in-forms',
  templateUrl: './sign-in-forms.component.html',
  styleUrls: ['./sign-in-forms.component.css']
})
export class SignInFormsComponent implements OnInit {


htmlPre = '';
compUnescape='';

signInForms: any;
convertedDatas: any = [];
html: SafeHtml = '';


constructor(public sanitizer: DomSanitizer, private titleService: Title, private signinService: SignInFormsService) {
  this.titleService.setTitle("Sting - Sign in forms");
 }
  ngOnInit(): void {


   
    this.signInForms =  this.signinService.siginInFormDatas;

   from(this.signInForms)
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
