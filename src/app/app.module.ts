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
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { FormsModule } from '@angular/forms';
import { ColorsComponent } from './components/config/colors/colors.component';
import { ThemesComponent } from './components/config/themes/themes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { InstallationComponent } from './components/config/installation/installation.component';
import { TypographyComponent } from './components/config/typography/typography.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TypographyModule } from './components/config/typography/typography.module';
import { SharedModule } from './shared/shared.module';
import { commonComponentModule } from './components/page/common/commonComponent.module';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ClickedOutsideDirective } from './shared/click-outside/clicked-outside.directive';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    SidenavComponent,
    LayoutComponent,  
    OverlayComponent,
    ColorsComponent,
    ThemesComponent,
    DropdownDirective,
    InstallationComponent,
    TypographyComponent,
    HighlightDirective,
    SearchComponent,
    FilterPipe,
    ClickedOutsideDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    commonComponentModule,
    // Ng2SearchPipeModule
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
