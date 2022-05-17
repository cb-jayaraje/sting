import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sting - Chargebee';
  theme:Observable<string>;

  constructor(
    private commonService: CommonService
  ){ 
    this.theme = this.commonService.getTheme();
  }

  
}
