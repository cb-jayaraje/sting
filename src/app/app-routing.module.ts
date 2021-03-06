import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ColorsComponent } from './components/config/colors/colors.component';
import { InstallationComponent } from './components/config/installation/installation.component';
import { ThemesComponent } from './components/config/themes/themes.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AlertsComponent } from './components/page/alerts/alerts.component';
import { BadgesComponent } from './components/page/badges/badges.component';
import { ButtonsComponent } from './components/page/buttons/buttons.component';
import { CheckboxComponent } from './components/page/checkbox/checkbox.component';
import { GelatoComponent } from './components/page/checkout/gelato/gelato.component';
import { DropdownsComponent } from './components/page/dropdowns/dropdowns.component';
import { InputGroupsComponent } from './components/page/input-groups/input-groups.component';
import { ListContainersComponent } from './components/page/list-containers/list-containers.component';
import { ModalsComponent } from './components/page/modals/modals.component';
import { PageComponent } from './components/page/page.component';
import { RadioGroupsComponent } from './components/page/radio-groups/radio-groups.component';
import { SelectMenusComponent } from './components/page/select-menus/select-menus.component';
import { SignInFormsComponent } from './components/page/sign-in-forms/sign-in-forms.component';
import { TableComponent } from './components/page/table/table.component';
import { TabsComponent } from './components/page/tabs/tabs.component';
import { ToggleComponent } from './components/page/toggle/toggle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'components', children: [
    {path: '', component: ComponentsComponent},
    {path: 'page', component: PageComponent, children: [
      {path: '', redirectTo: '/components', pathMatch: 'full'},
      // {path: 'components', component: ComponentsComponent},
      {path: 'input-groups', component: InputGroupsComponent},
      {path: 'sign-in-forms', component: SignInFormsComponent},
      {path: 'checkout', component: GelatoComponent},
      {path: 'alerts', component: AlertsComponent},
      {path: 'select-menus', component: SelectMenusComponent},
      {path: 'badges', component: BadgesComponent},
      {path: 'dropdowns', component: DropdownsComponent},
      {path: 'buttons', component: ButtonsComponent},
      {path: 'list-containers', component: ListContainersComponent},
      {path: 'modals', component: ModalsComponent},
      {path:'colors', component: ColorsComponent},
      {path:'themes', component: ThemesComponent},
      {path:'table', component: TableComponent},
      {path: 'installation', component: InstallationComponent},
      {path: 'radio-groups', component: RadioGroupsComponent},
      {path: 'toggles', component: ToggleComponent},
      {path: 'tabs', component: TabsComponent},
      {path: 'checkbox', component: CheckboxComponent}
    ]}
  ]}
 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
