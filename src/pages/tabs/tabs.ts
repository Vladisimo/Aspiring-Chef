import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ExplorePage } from '../explore/explore';
import { FridgePage } from '../fridge/fridge';
import { ContactPage } from '../contact/contact';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = ExplorePage;
  tab3Root = FridgePage;
  tab4Root = FavoritesPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
