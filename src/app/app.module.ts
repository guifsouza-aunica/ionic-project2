import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { ClickDetailsPage } from '../pages/click-details/click-details';
import { FormDetailsPage } from '../pages/form-details/form-details';
import { SearchDetailsPage } from '../pages/search-details/search-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClickDetailsPage,
    FormDetailsPage,
    SearchDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClickDetailsPage,
    FormDetailsPage,
    SearchDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseAnalytics
  ]
})
export class AppModule {}
