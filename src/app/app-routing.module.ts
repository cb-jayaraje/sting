import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { AlertsComponent } from './components/page/alerts/alerts.component';
import { BadgesComponent } from './components/page/badges/badges.component';
import { ButtonsComponent } from './components/page/buttons/buttons.component';
import { DropdownsComponent } from './components/page/dropdowns/dropdowns.component';
import { InputGroupsComponent } from './components/page/input-groups/input-groups.component';
import { PageComponent } from './components/page/page.component';
import { SelectMenusComponent } from './components/page/select-menus/select-menus.component';
import { SignInFormsComponent } from './components/page/sign-in-forms/sign-in-forms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'components', children: [
    {path: '', component: ComponentsComponent},
    {path: 'page', component: PageComponent, children: [
      {path: '', redirectTo: '/components', pathMatch: 'full'},
      {path: 'input-groups', component: InputGroupsComponent},
      {path: 'sign-in-forms', component: SignInFormsComponent},
      {path: 'alerts', component: AlertsComponent},
      {path: 'select-menus', component: SelectMenusComponent},
      {path: 'badges', component: BadgesComponent},
      {path: 'dropdowns', component: DropdownsComponent},
      {path: 'buttons', component: ButtonsComponent}
    ]}
  ]}
 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
