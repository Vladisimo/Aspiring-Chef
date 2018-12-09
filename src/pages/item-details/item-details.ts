import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { RecipeService, Recipe } from '../../services/recipeService';

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html',
})

export class ItemDetailsPage {

    public recipe: Recipe;

    constructor(private navParams: NavParams, private recipeService: RecipeService) {
        this.recipe = this.navParams.get('recipe')
    }

    toggleFavorite() {
        this.recipeService.toggleFavorite(this.recipe.id);
    }
}
