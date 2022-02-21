import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 
  formComponents:any = [];
  imageUrl= "./assets/images/"

  constructor() { }

  ngOnInit(): void {

    this.formComponents = [
      {title: "Form Layouts", noOfComponents: 5, image: `form-layouts.png`, link: '/dist/components/input-groups.html'},
      {title: "Input Groups", noOfComponents: 15, image:  "input-groups.png", link: '/components/page/input-groups'},
      {title: "Select Menus", noOfComponents: 7, image: "select-menus.png"},
      {title: "Sign-in and Registration", noOfComponents: 3, image: "sign-in-forms.png"},
      {title: "Textareas", noOfComponents: 5, image: "textareas.png"},
      {title: "Radio Groups", noOfComponents: 12, image:"radio-groups.png"},
      {title: "Checkboxes", noOfComponents: 4, image: "checkboxes.png"},
      {title: "Toggles", noOfComponents: 5, image: "toggles.png"},
      {title: "Action Panels", noOfComponents: 8, image:  "action-panels.png"}
      ];
  }

}
