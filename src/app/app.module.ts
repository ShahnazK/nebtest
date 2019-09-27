import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { EclairDashboardModule } from './eclair-dashboard/eclair-dashboard.module';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {
        path : " ",
        component : AppComponent
      }
    ]),
    NbThemeModule.forRoot({name: 'mytheme'}),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    EclairDashboardModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
