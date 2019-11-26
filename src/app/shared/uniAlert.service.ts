import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';

@Injectable()
export class UniAlertService {

    constructor(private alertCtrl: AlertController) {}

    async show(options: AlertOptions) {

        if (!options.buttons) { options.buttons = ['OK']; }

        const alert = await this.alertCtrl.create(options);
        alert.present();

    }

}
