import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NewTweet, Tweet } from 'src/app/interfaces/tweet';
import { TweetsService } from 'src/app/services/tweets/tweets.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.page.html',
  styleUrls: ['./new-comment.page.scss'],
})
export class NewCommentPage implements OnInit {

  newComment = {} as NewTweet;

  comments: Tweet[] = [];

  parentTweet: Tweet;

  readOnly = true;

  constructor(
    private modalCtrl: ModalController,
    private tweetsService: TweetsService,
    private navParams: NavParams,
    private auth: AuthService,
    private toastService: ToastService,
    private uniLoader: UniLoaderService
  ) { }

  async ngOnInit() {
    this.parentTweet = this.navParams.get('tweet');
    await this.getComments();
  }

  async getComments() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Popolo il mio array di oggetti 'Tweet' con quanto restituito dalla chiamata API
      this.comments = await this.tweetsService.getComments(this.parentTweet);

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

  async dismiss() {

    await this.modalCtrl.dismiss();

  }

  async deleteComment(comment: Tweet) {

    try {

      // Mostro il loader
      await this.uniLoader.show();

      // Cancello il mio tweet
      await this.tweetsService.deleteTweet(comment._id);

      // Riaggiorno la mia lista di tweets
      await this.getComments();

      // Mostro un toast di conferma
      await this.toastService.show({
        message: 'Your tweet was deleted successfully!',
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

  async editComment(comment: Tweet) {

    // Se l'utente è in modalità modifica...
    if (!this.readOnly) {
      try {

        // Avvio il loader
        await this.uniLoader.show();

        // Salvo le modifiche apportate all'oggetto 'me'
        await this.tweetsService.editTweet(comment);

        // Rimuovo il loader
        await this.uniLoader.dismiss();

        // Mostro toast di conferma
        await this.toastService.show({
          message: 'Your comment edit are now safe and sound!',
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


  getAuthor(tweet: Tweet): string {

    if (this.canEdit(tweet)) {
      return 'You';
    } else {
      return tweet._author.name + ' ' + tweet._author.surname;
    }
  }

  canEdit(tweet: Tweet): boolean {

    if (tweet._author) {
      return tweet._author._id === this.auth.me._id;
    }

    return false;


  }

  async createComment() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Chiamo la createTweet se l'utente sta creando un nuovo tweet
      this.newComment._parent = this.parentTweet;
      await this.tweetsService.createComment(this.newComment);
        

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }
    await this.getComments();
    this.newComment.tweet = "";

    // Chiudo il loader
    await this.uniLoader.dismiss();

  }

  isDataInvalid(): boolean {

    if (this.newComment.tweet) {
      return !this.newComment.tweet.length ||
      this.newComment.tweet.length > 120;
    }
    return true;

  }

}
