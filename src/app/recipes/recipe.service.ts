import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'Egt Smakelijk wholla',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/1200px-Lasagne_-_stonesoup.jpg',
      [
        new Ingredient('Can of tomatoes', 2),
        new Ingredient('Lasagna sheets', 10)
      ]),
    new Recipe(
      'Witlof',
      'Barf!',
      'https://smulweb-infra-smulwebbackendpublicbucket7daa1a81-1um3gn7obc0l4.s3.eu-central-1.amazonaws.com/public/sites/default/files/category_image/1352713429_6871_0.jpg?PHl1OYHYGmve3Iy1hVdwn.1lMXrX5Pfx',
      [
        new Ingredient('Witlof dirt', 4),
        new Ingredient('Sweet Ass Cheese', 25)
      ])
];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addingredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
