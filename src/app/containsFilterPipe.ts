import { Pipe, PipeTransform } from '@angular/core'
import { Recipe } from '../services/recipeService'


@Pipe({
    name: 'containsFilter'
})
export class ContainsFilterPipe implements PipeTransform {
    transform(recipes: Recipe[], ingredientsToFilter: string[]) {
        if (!ingredientsToFilter || ingredientsToFilter.length == 0) {
            return recipes;
        } else {
            return recipes.filter(recipe =>
                ingredientsToFilter.every(ingredientToFilter =>
                    recipe.ingredients.some(ingredient => 
                        ingredient.includes(ingredientToFilter)
                    )
                )
            );
        }
    }
}