import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor( private commonService: CommonService) { }

  ngOnInit(): void {
  }

  changeTheme(theme: string): void {
    this.commonService.setTheme(theme)
  }

}
