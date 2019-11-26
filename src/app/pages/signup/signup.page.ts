import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  constructor(
    private navCtrl: NavController,
    private usersService: UsersService,
    private auth: AuthService,
    private toastService: ToastService,
    private uniLoader: UniLoaderService
  ) { }

  user = {} as User;

  async signup() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Creo utente
      await this.usersService.createUser(this.user);

      // Creo oggetto login
      const loginUser: Login = {
        email: this.user.email,
        password: this.user.password
      };

      // Effettuo il login, per salvare il token in sessione
      await this.auth.login(loginUser);

      // Se la chiamata è andata buon fine, porto l'utente sulla schermata Tabs
      await this.navCtrl.navigateRoot('/');

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: 'Account successfully created!',
        type: ToastTypes.SUCCESS
      });

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

  isDataInvalid(): boolean {

    if (this.user.password) {
      return this.user.password.length < 5;
    }

    return true;

  }


}
