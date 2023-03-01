import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { HighlightService } from 'src/app/services/high-light.service';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {

  htmlPre = '';
compUnescape='';
html: SafeHtml = '';
highlighted: boolean = false;
codePreview= '';
frameworkCodePreview= '';
npmInstall= '';

  constructor(public sanitizer: DomSanitizer, private titleService: Title, private highlightService: HighlightService,) {
    this.titleService.setTitle("Sting - Installation");
   }

   ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;

  }

  ngOnInit(): void {

    this.codePreview = ` 
    <!doctype html>
    <html class="theme-sting">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chargebee</title>
        <!--Sting CDN link -->
        <link rel="stylesheet" href="https://cbproductdesign.devcb.in/sting-ui/cdn/sting.min.1.1.0.css">
        <!--Tailwind CDN -->
        <script src="https://cdn.tailwindcss.com"></script>
        <!--Theme CDN -->
        <link rel="stylesheet" href="https://cb-design.netlify.app/sting_tokens.css">
        <!--Icon webcomponent CDN -->
        <script src="https://cb-design.netlify.app/sting-icons.1.0.js"></script>
        <!--Tailwind config-->
        <script src="https://cbproductdesign.devcb.in/sting-ui/cdn/config.js"></script>
    
    </head>
    
    <body>

        <!--tailwind utilities -->
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    
    </body>
    
    </html>`

    this.npmInstall = `npm i cb-sting@latest`

    this.frameworkCodePreview = `
    <head>

        <link rel="stylesheet" href="https://cb-design.netlify.app/sting_tokens.css">
        <!--Icon webcomponent CDN -->
        <script src="https://cb-design.netlify.app/sting-icons.1.0.js"></script>

    </head>
    `
  }

}
