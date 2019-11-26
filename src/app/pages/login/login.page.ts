import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Login } from 'src/app/interfaces/login';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginUser = {} as Login;

  constructor(
    private navCtrl: NavController,
    private auth: AuthService,
    private uniLoader: UniLoaderService,
    private toastService: ToastService
  ) { }

  async goToSignup() {

    // Navigo l'utente sulla pagina signup
    await this.navCtrl.navigateForward('/signup');

  }

  async login() {

    try {

      // Avvio il loader in attesa che venga risolta la promise
      await this.uniLoader.show();

      // Effettuo la chiamata login
      await this.auth.login(this.loginUser);

      // Se la chiamata è andata buon fine, porto l'utente sulla schermata Tabs
      await this.navCtrl.navigateRoot('/');

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

    if (this.loginUser.password) {
      return this.loginUser.password.length < 5;
    }

    return true;
  }

}
