import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class CommonService {

    imagePath= './assets/images/';
    componentPath = '/components/page/'

    private  _theme = new BehaviorSubject<string>('theme-sting');
    private _theme$ = this._theme.asObservable();

    private _pageTitle = new BehaviorSubject<string>('');
    private _pageTitle$ = this._pageTitle.asObservable();

    constructor(){}

    setTheme(theme: string){
        this._theme.next(theme)
    }

    getTheme(): Observable<string>{
        return this._theme$;
    }

    
    setPageTitle(title: string){
        this._pageTitle.next(title)
    }
    getPageTitle(): Observable<string> {
        return this._pageTitle$
    }
    

}