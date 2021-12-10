import Page from './page';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';
import AppList from '../components/app-list';
import TheMealDB from '../../globals/themealdb/themealdb';
import AppRecipe from '../components/app-recipe';

class Index extends Page {
  static async render() {
    return '<app-list></app-list><app-recipe></app-recipe>';
  }

  static async created() {
    const restaurants = await DicodingRestaurant.list();
    const restaurantHTML = restaurants.map(AppList.restaurantCard);
    document.getElementById('restaurants').append(...restaurantHTML);

    const recipe = await TheMealDB.random();
    const recipeHTML = AppRecipe.recipeCard(recipe);
    document.getElementById('recipe').append(...recipeHTML);
  }
}

export default Index;
