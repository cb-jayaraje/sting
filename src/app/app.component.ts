import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Sting - Chargebee';
  theme: Observable<string>;
  modeSub: Subscription | undefined;
  isDarkMode: boolean = true;

  constructor(private commonService: CommonService) {
    this.theme = this.commonService.getTheme();
  }

  ngOnInit(): void {
    this.modeSub = this.commonService
      .getSystemMode()
      .subscribe((modeData: string) => {
        this.isDarkMode =
          modeData === 'dark'
            ? (this.isDarkMode = true)
            : (this.isDarkMode = false);
      });
  }
}
