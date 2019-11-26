import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';
import { NavController } from '@ionic/angular';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniAlertService } from 'src/app/shared/uniAlert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  me: User;

  readOnly = true;

  constructor(
    private auth: AuthService,
    private usersService: UsersService,
    private navCtrl: NavController,
    private uniLoader: UniLoaderService,
    private toastService: ToastService,
    private uniAlert: UniAlertService
  ) { }

  ngOnInit() {
    this.me = this.auth.me;
  }

  async editAndSave() {

    // Se l'utente è in modalità modifica...
    if (!this.readOnly) {
      try {

        // Avvio il loader
        await this.uniLoader.show();

        // Salvo le modifiche apportate all'oggetto 'me'
        await this.usersService.editUser(this.me);

        // Rimuovo il loader
        await this.uniLoader.dismiss();

        // Mostro toast di conferma
        await this.toastService.show({
          message: 'Your account edits are now safe and sound!',
          type: ToastTypes.SUCCESS
        });

      } catch (err) {

        // Chiudo il loader
        await this.uniLoader.dismiss();

        // Nel caso la chiamata vada in errore, mostro l'errore in un toast
        await this.toastService.show({
          message: err.message,
          type: ToastTypes.ERROR
        });

      }
    }

    // Altrimenti, cambio lo stato della mia variabile - per rendere i campi editabili o meno
    this.readOnly = !this.readOnly;

  }

  async deleteMe() {

    // Creo testo e callbacks per i bottoni del mio loader
    const alertButtons = [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {}
    }, {
      text: 'OK',
      handler: async () => {
        this.confirmedDeletedUser();
      }
    }];

    // Mostro il loader per chiedere all'utente conferma
    await this.uniAlert.show({
      header: 'Head up!',
      subHeader: 'You are about to delete your own account.',
      message: 'Do you confirm you want to proceed with this action?',
      buttons: alertButtons
    });

  }

  async confirmedDeletedUser() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Effettuo la chiamata per cancellare la il mio utente
      await this.usersService.deleteUser(this.me._id);

      // Procedo con il logout
      await this.logout();

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

    // Chiudo il loader
    await this.uniLoader.dismiss();

  }

  async logout() {

    // Cancello il mio utente in sessione, settando il mio oggetto a oggetto vuoto
    this.auth.me = {} as User;

    // Cancello il token in sessione settandolo come undefined
    this.auth.userToken = undefined;

    // Navigo l'utente nella schermata Login
    await this.navCtrl.navigateRoot('/login');

  }

}
