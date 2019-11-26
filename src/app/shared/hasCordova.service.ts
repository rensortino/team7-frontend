import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Platforms } from '../enums/platforms.enum';

@Injectable()
export class HasCordovaService {
    constructor( private platform: Platform) { }

    check() {
        return this.platform.is(Platforms.CORDOVA);
    }

}
