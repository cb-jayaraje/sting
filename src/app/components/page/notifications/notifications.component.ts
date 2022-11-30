import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  notifications: any;
  convertedDatas: any = [];
  html: SafeHtml = '';

  constructor(
    public sanitizer: DomSanitizer,
    private titleService: Title,
    private notificationService: NotificationService
  ) {
    this.titleService.setTitle('Sting - Notifications');
  }

  ngOnInit(): void {
    this.notifications = this.notificationService.notificationDatas;

    from(this.notifications)
      .pipe(
        map((data: any) => {
          this.html = data.code;
          // console.log(this.html)
          const datas = {
            id: data.id,
            title: data.title,
            code: this.html,
          };

          return datas;
        })
      )
      .subscribe((dataRes) => {
        this.convertedDatas.push(dataRes);
        // console.log(this.convertedDatas)
      });
  }
}
