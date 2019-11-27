import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NewTweet, Tweet } from 'src/app/interfaces/tweet';
import { TweetsService } from 'src/app/services/tweets/tweets.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.page.html',
  styleUrls: ['./new-comment.page.scss'],
})
export class NewCommentPage implements OnInit {

  newComment = {} as NewTweet;

  parentTweet: Tweet;

  constructor(
    private modalCtrl: ModalController,
    private tweetsService: TweetsService,
    private navParams: NavParams,
    private toastService: ToastService,
    private uniLoader: UniLoaderService
  ) { }

  ngOnInit() {
    this.parentTweet = this.navParams.get('tweet');

  }

  async dismiss() {

    await this.modalCtrl.dismiss();

  }

  async createComment() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      // Chiamo la createTweet se l'utente sta creando un nuovo tweet
      this.newComment._parent = this.parentTweet;
      await this.tweetsService.createComment(this.newComment);
        

      // Chiudo la modal
      await this.dismiss();

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

    if (this.newComment.tweet) {
      return !this.newComment.tweet.length ||
      this.newComment.tweet.length > 120;
    }
    return true;

  }

}
