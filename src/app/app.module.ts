import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewTweetPageModule } from './pages/new-tweet/new-tweet.module';
import { HasCordovaService } from './shared/hasCordova.service';
import { UniLoaderService } from './shared/uniLoader.service';
import { UniAlertService } from './shared/uniAlert.service';
import { ToastService } from './shared/toast.service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NewTweetPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HasCordovaService,
    UniLoaderService,
    UniAlertService,
    ToastService,
    BarcodeScanner,
    Vibration,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
