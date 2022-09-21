import { Component, OnInit } from '@angular/core';
import { concat, from, map } from 'rxjs';
import { inputGroupsService } from 'src/app/services/input-groups.service';
import { SelectMenuServices } from 'src/app/services/select-menu.service';
import { SignInFormsService } from 'src/app/services/sign-in-forms.service';
import { CheckboxService } from 'src/app/services/checkbox.service';
import { RadioGroupService } from 'src/app/services/radio-groups.service';
import { ToggleService } from 'src/app/services/toggle.service';
import { getNum } from 'src/app/util';
import * as formsData from './../../data-page.json';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  formComponents: any = [];
  formData: any = formsData;
  imageUrl = "./assets/images/";
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


    // this.formComponents = this.formData.forms;
    this.formComponents = [
      { "title": "Input Groups", "noOfComponents": getNum(inputGroupsService), "image": "input-groups.png", "link": "input-groups" },
      { "title": "Select Menus", "noOfComponents": getNum(SelectMenuServices), "image": "select-menus.png", "link": "select-menus" },
      { "title": "Sign-in and Registration", "noOfComponents": getNum(SignInFormsService), "image": "sign-in-forms.png", "link": "sign-in-forms" },
      { "title": "Checkboxes", "noOfComponents": getNum(CheckboxService), "image": "checkboxes.png", "link": "checkbox" },
      { "title": "Radio Buttons", "noOfComponents": getNum(RadioGroupService), "image": "radio-groups.png", "link": "radio-groups" },
      { "title": "Toggles", "noOfComponents": getNum(ToggleService), "image": "toggles.png", "link": "toggles" },
    ];

    // console.log(this.formData.forms)


  }

  changeTheme(arg=''){}

}
