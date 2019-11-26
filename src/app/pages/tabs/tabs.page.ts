import { Component } from '@angular/core';
import { HasCordovaService } from 'src/app/shared/hasCordova.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  hasCordova = false;

  constructor( private hasCordovaService: HasCordovaService) {

    // Quando costruisco la schermata tab; verifico se nel dispositivo è presente il layer Cordova o meno
    this.hasCordova = this.hasCordovaService.check();

  }

}
