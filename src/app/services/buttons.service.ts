import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ButtonService { 

    buttonDatas = [
        {
            id: 'button_1',
            title: 'Button outline',
            code: `
            <button type="button" class="btn-outline  px-2.5 py-1.5 text-xs ">Button text</button>
            <button type="button" class="btn-outline px-3 py-2 text-sm leading-4">Button text</button>
            <button type="button" class="btn-outline px-4 py-2 text-sm ">Button text</button>
            <button type="button" class="btn-outline px-4 py-2 text-base ">Button text</button>
            <button type="button" class="btn-outline px-6 py-3 text-base ">Button text</button>
            `
        },
    ]
}