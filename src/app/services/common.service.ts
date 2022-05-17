import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class CommonService {

    imagePath= './assets/images/';
    componentPath = '/components/page/'

    private  _theme = new BehaviorSubject<string>('theme-sting');
    private _theme$ = this._theme.asObservable();

    constructor(){}

    setTheme(theme: string){
        this._theme.next(theme)
    }

    getTheme(): Observable<string>{
        return this._theme$;
    }
    

}