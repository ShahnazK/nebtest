import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbCardModule, NbThemeModule } from '@nebular/theme';
import { HomepageComponent } from './homepage/homepage.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [HomepageComponent, HeaderComponent, Header2Component],
  imports: [
    CommonModule,
    NbThemeModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbEvaIconsModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class EclairDashboardModule { }
