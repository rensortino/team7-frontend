import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';

@Injectable()
export class UniLoaderService {

    constructor(private loadingCtrl: LoadingController) {}

    async show() {

        const options: LoadingOptions = {
            spinner: 'circles',
            message: 'Please wait...'
        };

        const alert = await this.loadingCtrl.create(options);
        alert.present();

    }

    async dismiss() {
        return await this.loadingCtrl.dismiss();
    }

}
