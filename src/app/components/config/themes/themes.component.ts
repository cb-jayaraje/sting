import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  colorValues= ['50', '100', '200', '300', '400', '500', '600' ];
  primary = 'bg-primary-';
  secondary = 'bg-secondary-';
  primaryCovert: any[]=[];

  constructor( private commonService: CommonService) { }

  ngOnInit(): void {
    from(this.colorValues)
    .pipe(
      map(data => {
        const convert = 'bg-primary-'+data;
        return convert;
      })
      )
      .subscribe((res: any) => {
        this.primaryCovert.push(res)
      })
    
  }

  changeTheme(theme: string): void {
    this.commonService.setTheme(theme)
  }

}
