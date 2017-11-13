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
          }
        ]
      }
    ]
  },
  {
    path: '', redirectTo: 'dashboard', 
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
    Infobox5Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
