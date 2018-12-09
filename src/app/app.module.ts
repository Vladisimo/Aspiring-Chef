import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ExplorePage } from '../pages/explore/explore';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FridgePage } from '../pages/fridge/fridge';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipeService } from '../services/recipeService';
import { FavoriteFilterPipe } from './favoritesFilterPipe'
import { ContainsFilterPipe } from './containsFilterPipe'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ItemDetailsPage,
    ExplorePage,
    ContactPage,
    TabsPage,
    FavoritesPage,
    FridgePage,
    FavoriteFilterPipe,
    ContainsFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ItemDetailsPage,
    ExplorePage,
    ContactPage,
    TabsPage,
    FavoritesPage,
    FridgePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeService
  ]
})
export class AppModule {}
