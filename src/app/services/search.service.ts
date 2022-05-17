import { Injectable } from "@angular/core";
import * as data from './../data-page.json'

@Injectable({
    providedIn: 'root'
})

export class SearchService {

    componentList = data;

    constructor(){

    }

    getList(){
        return this.componentList.leftNav
    }
}