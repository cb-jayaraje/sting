import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ColorsComponent } from './components/config/colors/colors.component';
import { IconsComponent } from './components/config/icons/icons.component';
import { InstallationComponent } from './components/config/installation/installation.component';
import { ThemesComponent } from './components/config/themes/themes.component';
import { TypographyComponent } from './components/config/typography/typography.component';
import { FeedbackComponent } from './components/page/feedback/feedback.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutStingComponent } from './components/page/about-sting/about-sting.component';
import { AlertsComponent } from './components/page/alerts/alerts.component';
import { BadgesComponent } from './components/page/badges/badges.component';
import { BreadcrumbsComponent } from './components/page/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/page/buttons/buttons.component';
import { CardsComponent } from './components/page/cards/cards.component';
import { CheckboxComponent } from './components/page/checkbox/checkbox.component';
import { GelatoComponent } from './components/page/checkout/gelato/gelato.component';
import { ContainersComponent } from './components/page/containers/containers.component';
import { DesignPatternsComponent } from './components/page/design-patterns/design-patterns.component';
import { DropdownsComponent } from './components/page/dropdowns/dropdowns.component';
import { InputGroupsComponent } from './components/page/input-groups/input-groups.component';
import { ListContainersComponent } from './components/page/list-containers/list-containers.component';
import { ModalsComponent } from './components/page/modals/modals.component';
import { NewComponent } from './components/page/new/new.component';
import { NotificationsComponent } from './components/page/notifications/notifications.component';
import { PageHeadingComponent } from './components/page/page-heading/page-heading.component';
import { PageComponent } from './components/page/page.component';
import { PaginationComponent } from './components/page/pagination/pagination.component';
import { RadioGroupsComponent } from './components/page/radio-groups/radio-groups.component';
import { SelectMenusComponent } from './components/page/select-menus/select-menus.component';
import { SignInFormsComponent } from './components/page/sign-in-forms/sign-in-forms.component';
import { StackedListsComponent } from './components/page/stacked-lists/stacked-lists.component';
import { StatsComponent } from './components/page/stats/stats.component';
import { StepsComponent } from './components/page/steps/steps.component';
import { TableComponent } from './components/page/table/table.component';
import { TabsComponent } from './components/page/tabs/tabs.component';
import { ToggleComponent } from './components/page/toggle/toggle.component';
import { HomeComponent } from './home/home.component';
import { MetaphorsComponent } from './components/page/metaphors/metaphors.component';
import { ConversationComponent } from './components/page/conversation/conversation.component';
import { GroupingComponent } from './components/page/grouping/grouping.component';
import { ComingSoonComponent } from './components/page/coming-soon/coming-soon.component';
import { BannersComponent } from './components/page/banners/banners.component';

const routes: Routes = [
  { path: '', redirectTo: '/components/page/installation', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'components',
    children: [
      { path: '', component: ComponentsComponent },
      {
        path: 'page',
        component: PageComponent,
        children: [
          { path: '', redirectTo: '/components', pathMatch: 'full' },
          // {path: 'components', component: ComponentsComponent},
          { path: 'about', component: AboutStingComponent },
          { path: 'banners', component: BannersComponent },
          { path: 'new', component: NewComponent },
          { path: 'feedback', component: FeedbackComponent },
          { path: 'metaphors', component: MetaphorsComponent },
          { path: 'conversation', component: ConversationComponent },
          { path: 'grouping', component: GroupingComponent },
          { path: 'input-groups', component: InputGroupsComponent },
          { path: 'sign-in-forms', component: SignInFormsComponent },
          { path: 'checkout', component: GelatoComponent },
          { path: 'alerts', component: AlertsComponent },
          { path: 'select-menus', component: SelectMenusComponent },
          { path: 'badges', component: BadgesComponent },
          { path: 'dropdowns', component: DropdownsComponent },
          { path: 'buttons', component: ButtonsComponent },
          { path: 'list-containers', component: ListContainersComponent },
          { path: 'modals', component: ModalsComponent },
          { path: 'colors', component: ColorsComponent },
          { path: 'icons', component: IconsComponent },
          { path: 'typography', component: TypographyComponent },
          { path: 'themes', component: ThemesComponent },
          { path: 'table', component: TableComponent },
          { path: 'stacked-lists', component: StackedListsComponent },
          { path: 'installation', component: InstallationComponent },
          { path: 'radio-groups', component: RadioGroupsComponent },
          { path: 'toggles', component: ToggleComponent },
          { path: 'tabs', component: TabsComponent },
          { path: 'checkbox', component: CheckboxComponent },
          { path: 'steps', component: StepsComponent },
          { path: 'cards', component: CardsComponent },
          { path: 'containers', component: ContainersComponent },
          { path: 'pagination', component: PaginationComponent },
          { path: 'page-headings', component: PageHeadingComponent },
          { path: 'breadcrumbs', component: BreadcrumbsComponent },
          { path: 'stats', component: StatsComponent },
          { path: 'notifications', component: NotificationsComponent },
          { path: 'design-principles', component: DesignPatternsComponent },
          { path: 'coming-soon', component: ComingSoonComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
