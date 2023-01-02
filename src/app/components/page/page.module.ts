import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SafeHtmlPipe } from "src/app/pipe/safe-html.pipe";
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { InputCommonComponent } from './input-groups/input-common/input-common.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsCommonComponent } from './alerts/alerts-common/alerts-common.component';
import { SelectMenusComponent } from './select-menus/select-menus.component';
import { CommonComponent } from './common/common.component';
import { BadgesComponent } from './badges/badges.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SignInFormsComponent } from './sign-in-forms/sign-in-forms.component';
import { ListContainersComponent } from './list-containers/list-containers.component';
import { ModalsComponent } from './modals/modals.component';
import { GelatoComponent } from './checkout/gelato/gelato.component';
import { TableComponent } from './table/table.component';
import { RadioGroupsComponent } from './radio-groups/radio-groups.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabsComponent } from './tabs/tabs.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownDirective } from "src/app/shared/dropdown.directive";
import { ToggleDropdownDirective } from "src/app/shared/toggleDropDown.directive";
import { ToggleDirective } from "src/app/shared/toggle.dirctive";
import { StackedListsComponent } from './stacked-lists/stacked-lists.component';
import { commonComponentModule } from "./common/commonComponent.module";
import { StepsComponent } from './steps/steps.component';
import { CardsComponent } from './cards/cards.component';
import { ContainersComponent } from './containers/containers.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { StatsComponent } from './stats/stats.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';

@NgModule({
    declarations: [
    InputGroupsComponent,
        
        InputCommonComponent,
        SafeHtmlPipe,
        AlertsComponent,
        AlertsCommonComponent,
        SelectMenusComponent,
        // CommonComponent,
        BadgesComponent,
        DropdownsComponent,
        ButtonsComponent,
        SignInFormsComponent,
        ListContainersComponent,
        ModalsComponent,
        GelatoComponent,
        TableComponent,
        RadioGroupsComponent,
        ToggleComponent,
        TabsComponent,
        CheckboxComponent,
        ToggleDropdownDirective,
        ToggleDirective,
        StackedListsComponent,
        StepsComponent,
        CardsComponent,
        ContainersComponent,
        PaginationComponent,
        PageHeadingComponent,
        BreadcrumbsComponent,
        StatsComponent,
        NotificationsComponent,
        DesignPatternsComponent
        
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        commonComponentModule

    ],
    exports: [
        
        
    ]   
})

export class PageModule {

}