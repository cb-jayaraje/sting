import { Component, OnInit } from '@angular/core';
import { concat, from, map } from 'rxjs';
import * as formsData from './../../data-page.json';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 
  formComponents:any = [];
  formData: any = formsData;
  imageUrl= "./assets/images/";
  path = '/components/page/'

  testdata: any = formsData;

  constructor() { }

  ngOnInit(): void {




    // console.log(this.formData)
    // Object.keys(this.formData).forEach((prop)=> {
    //   // `prop` is the property name
    //   // `data[prop]` is the property value
    //   let tr = this.formData[prop];
    //  // console.log(tr)

    //   // for (const [key, value] of Object.entries(tr)) {
    //   //   console.log(`${key}: ${value}`);
    //   // }
    //  this.te += tr
      
    // });


    // from(this.formData).pipe(map(d => {

    //   let newArr = [];

    //   newArr.push(d);



    //   // newArr.forEach((element: any) => {
    //   //   element.forEach( y => console.log(y))
    //   // });
      

    //   return newArr;
  
      
    // }
    // )).subscribe(data=> console.log(data))

   


    // this.formData = formsData
    

    this.formComponents = this.formData.forms;

    console.log(this.formData.forms)


  }

}
