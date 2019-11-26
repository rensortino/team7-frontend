import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastTypes } from 'src/app/enums/toast-types.enum';

interface ToastOptions {
    message?: string;
    type?: ToastTypes;
    duration?: number;
    accountDisabled?: boolean;
}

@Injectable()
export class ToastService {

    constructor(private toastCtrl: ToastController) {}

    async show(options: ToastOptions) {

        if (!options.duration) { options.duration = 5000; }
        if (!options.type) { options.type = ToastTypes.WARNING; }

        const toast = await this.toastCtrl.create(
        {
            message: options.message,
            cssClass: options.type,
            duration: options.duration,
            position: 'top',
        });

        return toast.present();

    }
}
