import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/interfaces/tweet';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  constructor(
    private usersService: UsersService,
    private auth: AuthService,
    private uniLoader: UniLoaderService,
    private toastService: ToastService
  ) { }


  favouritesTweets :Tweet [];

  async ngOnInit() {

    await this.getFavouritesTweets();

  }

  async ionViewWillEnter() {
    await this.getFavouritesTweets();
  }

 

  
  getLikesCount(tweet: Tweet) : number {
    return tweet._likes.length;
  }
  async favourite(tweet: Tweet) {
    await this.usersService.favourite(tweet);
    await this.getFavouritesTweets();
    return
  }

  async getFavouritesTweets() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Popolo il mio array di oggetti 'Tweet' con quanto restituito dalla chiamata API
      this.favouritesTweets = await this.usersService.getfavourites();

      // La chiamata è andata a buon fine, dunque rimuovo il loader
      await this.uniLoader.dismiss();

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

  }

  canEdit(tweet: Tweet): boolean {

    // Controllo che l'autore del tweet coincida col mio utente
    if (tweet._author) {
      return tweet._author._id === this.auth.me._id;
    }

    return false;

  }

  // Metodo bindato con l'interfaccia in Angular
  getAuthor(tweet: Tweet): string {

    if (this.canEdit(tweet)) {
      return 'You';
    } else {
      return tweet._author.name + ' ' + tweet._author.surname;
    }
  }

}
