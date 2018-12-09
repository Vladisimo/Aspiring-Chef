import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService, Recipe } from '../../services/recipeService'
import { ItemDetailsPage } from '../item-details/item-details'
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-explore',
    templateUrl: 'explore.html'
})

export class ExplorePage {

    public recipes$: Observable<Recipe[]>;
    public searchQuery: string = '';

    constructor(public navCtrl: NavController, public recipeService: RecipeService) {
        this.recipes$ = this.recipeService.recipes$;
    }

    getInput(search: string) {
        console.log(search);
        if (search == undefined) {
            this.searchQuery = "";
        } else {
            this.searchQuery = search;
        }
    }

    pushPageDetails(recipe: Recipe) {
        this.navCtrl.push(ItemDetailsPage, { recipe: recipe });
    }

    filter(recipes: Recipe[], search: string) {
        return recipes.filter(recipe => {
            return recipe.name.includes(search);
        })
    }

}