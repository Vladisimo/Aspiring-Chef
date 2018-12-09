import { Component } from '@angular/core';
import { RecipeService, Recipe } from '../../services/recipeService';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})

export class FavoritesPage {
    public recipes$: Observable<Recipe[]>;

    constructor(public navCtrl: NavController, public recipeService: RecipeService) {
        this.recipes$ = this.recipeService.recipes$;
    }

    pushPageDetails(recipe: Recipe) {
        this.navCtrl.push(ItemDetailsPage, { recipe: recipe });
    }
}
