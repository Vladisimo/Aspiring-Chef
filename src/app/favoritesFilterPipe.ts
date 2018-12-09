import { Pipe, PipeTransform } from '@angular/core'
import { Recipe } from '../services/recipeService'


@Pipe({
    name: 'favoriteFilter'
})
export class FavoriteFilterPipe implements PipeTransform {
    transform(recipes: Recipe[]) {
        return recipes.filter(recipe => recipe.favorite);
    }
}