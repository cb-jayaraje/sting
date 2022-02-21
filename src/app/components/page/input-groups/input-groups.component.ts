import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.css']
})
export class InputGroupsComponent implements OnInit {

componentCode = '';
componentTitle= '';
htmlPre = '';

  constructor() { }

  ngOnInit(): void {

    this.componentCode = '<div class=\"form-control\">\r\n        <label for=\"email\" class=\"label\">Email<\/label>\r\n        <div class=\"mt-1\">\r\n          <input type=\"email\" name=\"email\" id=\"email\" class=\"input\" placeholder=\"you@example.com\">\r\n        <\/div>\r\n      <\/div>'

    this.htmlPre = ' <div class="p-8 flex items-center justify-center bg-white"><div class="w-full max-w-xs mx-auto " [ngClass]="previewScreenSize"><div ><div class="form-control"> <label for="email" class="label">Email</label> <div class="mt-1"><input type="email" name="email" class="input" id="email"  placeholder="you@example.com"></div></div></div></div></div>'
    
  }

}
