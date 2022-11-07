import { Injectable } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";
import { BehaviorSubject, from, map, Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class CommonService {

    imagePath= './assets/images/';
    componentPath = '/components/page/'

    private  _theme = new BehaviorSubject<string>('theme-sting');
    private _theme$ = this._theme.asObservable();

    private _pageTitle = new BehaviorSubject<string>('');
    private _pageTitle$ = this._pageTitle.asObservable();

    private _componentData = new BehaviorSubject<any>([]);

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

    getComponentDatas(){
        return this._componentData
    }

    componentDatas(data: any) {


        let pushData:any = [];
        data.map((datas:any) => {
            let html: SafeHtml = datas.code;
           
                       const dataa = {
                id: datas.id,
                title: datas.title,
                code:html
                }
                console.log(dataa)

                pushData.push(dataa)
        })

        this._componentData.next(pushData)
       
       

            
    }
    

}