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
    const restaurantContainer = document.getElementById('restaurants');

    const restaurants = await DicodingRestaurant.list();
    const restaurantHTML = restaurants.map(AppList.restaurantCard);

    restaurantContainer.innerHTML = '';
    restaurantContainer.append(...restaurantHTML);

    const recipeContainer = document.getElementById('recipe');
    recipeContainer.innerHTML = '<app-loading></app-loading>';

    const recipe = await TheMealDB.random();
    const recipeHTML = AppRecipe.recipeCard(recipe);

    recipeContainer.innerHTML = '';
    recipeContainer.append(...recipeHTML);
  }
}

export default Index;
