import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { SubHeaderComponent } from 'src/app/layout/sub-header/sub-header.component';
import { SafeHtmlPipe } from 'src/app/pipe/safe-html.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { PageComponent } from './components/page/page.component';
import { PageModule } from './components/page/page.module';
import { FormsComponent } from './components/forms/forms.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ElementsComponent } from './components/elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    // SafeHtmlPipe,
    HeaderComponent,
    HomeComponent,
    SubHeaderComponent,
    ComponentsComponent,
    PageComponent,
    FormsComponent,
    FeedbackComponent,
    ElementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
