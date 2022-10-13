import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class TypographyServices {


    typographyDatas = [
        {
            "id": "t_1",
            "title": "Font Stack",
            "code": `
            <p class="cb-text-display">Display</p>
            <p class="cb-text-h1">Header 1</p>
            <p class="cb-text-h2">Header 2</p>
            <p class="cb-text-h3">Header 3</p>
            <p class="cb-text-h4">Header 4</p>
            <p class="cb-text-h5">Header 5</p>
            <p class="cb-text-h6">Header 6</p>
            <p class="cb-text-copy-large">Copy Large</p>
            <p class="cb-text-copy-regular">Copy Regular</p>
            <p class="cb-text-copy-small">Copy Small</p>
            <p class="cb-text-copy-upper">COPY UPPER</p>
            `
        },
        
    ]

 }