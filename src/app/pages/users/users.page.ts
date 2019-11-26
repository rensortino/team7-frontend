import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] = [];

  usersPics: number[] = [];
  private userPicsAvailable = 15;

  constructor(
    private usersService: UsersService,
    private auth: AuthService,
    private toastService: ToastService,
    private uniLoader: UniLoaderService
  ) {}



  async ngOnInit() {

    // Quando carico la pagina, riempio il mio array di Users
    await this.getUsers();

    // Invoco questa funzione per avere un pool di immagini da utilizzare per la lista utenti
    this.initUserPicts();

  }



  async getUsers() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Popolo il mio array di oggetti 'User' con quanto restituito dalla chiamata API
      this.users = await this.usersService.getUsers();

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


  // Metodo bindato con l'interfaccia in Angular, per cambiare il colore di un item quando l'utente coincide con l'account connesso
  getItemColor(user: User): string | null  {

    if (user._id === this.auth.me._id) {
      return 'light';
    }

    return null;

  }



  initUserPicts() {

    // Popolo l'array userPics con numeri random
    this.users.forEach(_ => {
      this.usersPics.push(Math.ceil(Math.random() * this.userPicsAvailable));
    });

  }



}
