import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, from, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonService {
  imagePath = './assets/images/';
  componentPath = '/components/page/';

  private _theme = new BehaviorSubject<string>('theme-sting');
  private _theme$ = this._theme.asObservable();

  private ststemTheme$ = new BehaviorSubject<string>('light');

  private _pageTitle = new BehaviorSubject<string>('');
  private _pageTitle$ = this._pageTitle.asObservable();

  private _componentData = new BehaviorSubject<any>([]);

  constructor(private router: Router) {}

  setTheme(theme: string) {
    this._theme.next(theme);
  }

  getTheme(): Observable<string> {
    return this._theme$;
  }

  setPageTitle(title: string) {
    this._pageTitle.next(title);
  }
  getPageTitle(): Observable<string> {
    return this._pageTitle$;
  }

  getComponentDatas() {
    return this._componentData;
  }

  componentDatas(data: any) {
    let pushData: any = [];
    data.map((datas: any) => {
      let html: SafeHtml = datas.code;

      const dataa = {
        id: datas.id,
        title: datas.title,
        code: html,
      };
      console.log(dataa);

      pushData.push(dataa);
    });

    this._componentData.next(pushData);
  }

  scroll(id: string) {
    console.log(id);
    let ele = document.getElementById(id) as HTMLElement;
    console.log(ele);
    var headerOffset = 45;
    var elementPosition = ele.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    ele.scrollIntoView({});
  }

  onClickSytemTheme() {
    this.ststemTheme$.value === 'dark'
      ? this.ststemTheme$.next('light')
      : this.ststemTheme$.next('dark');
  }

  getSystemMode(): Observable<string> {
    return this.ststemTheme$;
  }
}
