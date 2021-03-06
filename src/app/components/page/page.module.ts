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

@NgModule({
    declarations: [
    InputGroupsComponent,
        
        InputCommonComponent,
        SafeHtmlPipe,
        AlertsComponent,
        AlertsCommonComponent,
        SelectMenusComponent,
        CommonComponent,
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
        CheckboxComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
        
        
        
    ],
    exports: [
        
    ]
})

export class PageModule {

}