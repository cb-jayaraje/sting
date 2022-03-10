import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { AlertsComponent } from './components/page/alerts/alerts.component';
import { BadgesComponent } from './components/page/badges/badges.component';
import { InputGroupsComponent } from './components/page/input-groups/input-groups.component';
import { PageComponent } from './components/page/page.component';
import { SelectMenusComponent } from './components/page/select-menus/select-menus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'components', children: [
    {path: '', component: ComponentsComponent},
    {path: 'page', component: PageComponent, children: [
      {path: '', redirectTo: '/components', pathMatch: 'full'},
      {path: 'input-groups', component: InputGroupsComponent},
      {path: 'alerts', component: AlertsComponent},
      {path: 'select-menus', component: SelectMenusComponent},
      {path: 'badges', component: BadgesComponent}
    ]}
  ]}
 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
