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
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // title
    <!--Sting CDN link -->
    <link rel="stylesheet" href="https://cbproductdesign.devcb.in/sting-ui/cdn/sting.min.css">
    <!--Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!--Theme CDN -->
    <link rel="stylesheet" href="https://cbproductdesign.devcb.in/sting-ui/cdn/theme.sting.css">
    <!--Tailwind config-->
    <script src="https://cbproductdesign.devcb.in/sting-ui/cdn/config.js"></script>

    </head>
    <body>
      <!--tailwind utilities -->
      <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>

    
    <div class="pt-10 w-96">

    <!--sting components-->           
    <div class="form-control">
    <label for="email" class="label">Email</label>
    <div class="mt-1">
    <input type="email" name="email" id="email" class="input" placeholder="you@example.com" aria-describedby="email-description">
    </div>
    <p class="help-text" id="email-description">We'll only use this for spam.</p>
    </div>

    
    </div>
    </body>
    </html>`
  }

}
