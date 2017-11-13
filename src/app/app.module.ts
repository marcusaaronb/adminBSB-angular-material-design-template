import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorComponent } from './error/error.component';
import { TypographyComponent } from './typography/typography.component';
import { HomeComponent } from './home/home.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { BasicComponent } from './basic/basic.component';
import { ColoredComponent } from './colored/colored.component';
import { NoHeaderComponent } from './no-header/no-header.component';
import { Infobox1Component } from './infobox1/infobox1.component';
import { Infobox2Component } from './infobox2/infobox2.component';
import { Infobox3Component } from './infobox3/infobox3.component';
import { Infobox4Component } from './infobox4/infobox4.component';
import { Infobox5Component } from './infobox5/infobox5.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AnimationsComponent } from './animations/animations.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ColorsComponent } from './colors/colors.component';
import { DialogComponent } from './dialog/dialog.component';
import { IconsComponent } from './icons/icons.component';
import { LabelsComponent } from './labels/labels.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { PreloadersComponent } from './preloaders/preloaders.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { SortableNestableComponent } from './sortable-nestable/sortable-nestable.component';
import { TabsComponent } from './tabs/tabs.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { WavesComponent } from './waves/waves.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: SidemenuComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'typography',
            component: TypographyComponent
          },
          {
            path: 'helper-classes',
            component: HelperClassesComponent
          },
          {
            path: 'basic',
            component: BasicComponent
          },
          {
            path: 'colored',
            component: ColoredComponent
          },
          {
            path: 'no-header',
            component: NoHeaderComponent
          },
          {
            path: 'infobox1',
            component: Infobox1Component
          },
          {
            path: 'infobox2',
            component: Infobox2Component
          },
          {
            path: 'infobox3',
            component: Infobox3Component
          },
          {
            path: 'infobox4',
            component: Infobox4Component
          },
          {
            path: 'infobox5',
            component: Infobox5Component
          },
          {
            path: 'alerts',
            component: AlertsComponent
          },
          {
            path: 'animations',
            component: AnimationsComponent
          },
          {
            path: 'badge',
            component: BadgeComponent
          },
          {
            path: 'breadcrumbs',
            component: BreadcrumbsComponent
          },
          {
            path: 'buttons',
            component: ButtonsComponent
          },
          {
            path: 'collapse',
            component: CollapseComponent
          },
          {
            path: 'colors',
            component: ColorsComponent
          },
          {
            path: 'dialog',
            component: DialogComponent
          },
          {
            path: 'icons',
            component: IconsComponent
          },
          {
            path: 'labels',
            component: LabelsComponent
          },
          {
            path: 'list-groups',
            component: ListGroupsComponent
          },
          {
            path: 'media-object',
            component: MediaObjectComponent
          },
          {
            path: 'modals',
            component: ModalsComponent
          },
          {
            path: 'notifications',
            component: NotificationsComponent
          },
          {
            path: 'paginations',
            component: PaginationsComponent
          },
          {
            path: 'preloaders',
            component: PreloadersComponent
          },
          {
            path: 'progress-bars',
            component: ProgressBarsComponent
          },
          {
            path: 'range-sliders',
            component: RangeSlidersComponent
          },
          {
            path: 'sortable-nestable',
            component: SortableNestableComponent
          },
          {
            path: 'tabs',
            component: TabsComponent
          },
          {
            path: 'thumbnails',
            component: ThumbnailsComponent
          },
          {
            path: 'tooltips',
            component: TooltipsComponent
          },
          {
            path: 'waves',
            component: WavesComponent
          }
        ]
      }
    ]
  },
  {
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidemenuComponent,
    ErrorComponent,
    TypographyComponent,
    HomeComponent,
    HelperClassesComponent,
    BasicComponent,
    ColoredComponent,
    NoHeaderComponent,
    Infobox1Component,
    Infobox2Component,
    Infobox3Component,
    Infobox4Component,
    Infobox5Component,
    AlertsComponent,
    AnimationsComponent,
    BadgeComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CollapseComponent,
    ColorsComponent,
    DialogComponent,
    IconsComponent,
    LabelsComponent,
    ListGroupsComponent,
    MediaObjectComponent,
    ModalsComponent,
    NotificationsComponent,
    PaginationsComponent,
    PreloadersComponent,
    ProgressBarsComponent,
    RangeSlidersComponent,
    SortableNestableComponent,
    TabsComponent,
    ThumbnailsComponent,
    TooltipsComponent,
    WavesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
