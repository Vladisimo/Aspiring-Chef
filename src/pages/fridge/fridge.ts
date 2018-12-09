import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Recipe, RecipeService } from '../../services/recipeService';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
    selector: 'page-fridge',
    templateUrl: 'fridge.html',
})
export class FridgePage {

    public recipes$: Observable<Recipe[]>;
    public ingredients: string[] = ["sausages"];
    
    constructor(public navCtrl: NavController, public recipeService: RecipeService) {
        this.recipes$ = this.recipeService.recipes$;
    }

    deleteFilterIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredients = this.ingredients.slice(0);
    }
    addFilterIngredient(ingredient: string) {
        this.ingredients.push(ingredient)
        this.ingredients = this.ingredients.slice(0);
    }

    pushPageDetails(recipe: Recipe) {
        this.navCtrl.push(ItemDetailsPage, { recipe: recipe });
    }
}
