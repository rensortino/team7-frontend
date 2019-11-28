import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'tweets', loadChildren: './pages/tweets/tweets.module#TweetsPageModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersPageModule' },
  { path: 'extra', loadChildren: './pages/extra/extra.module#ExtraPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'new-tweet', loadChildren: './pages/new-tweet/new-tweet.module#NewTweetPageModule' },
  { path: 'new-comment', loadChildren: './pages/new-comment/new-comment.module#NewCommentPageModule' },  { path: 'favourites', loadChildren: './pages/favourites/favourites.module#FavouritesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
