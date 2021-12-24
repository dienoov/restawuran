import Page from './page';
import AppList from '../components/app-list';
import FavoriteIdb from '../../data/favorite-idb';

class Favorite extends Page {
  static async render() {
    return '<app-list></app-list>';
  }

  static async created() {
    const title = document.querySelector('h1');
    title.innerText = 'Favorite Restaurants';

    const container = document.getElementById('restaurants');

    const restaurants = await FavoriteIdb.all();

    if (restaurants.length) {
      const restaurantHTML = restaurants.map(AppList.restaurantCard);
      container.innerHTML = '';
      container.append(...restaurantHTML);
    } else {
      container.outerHTML = '<app-error data-msg="You have no favorite restaurant"></app-error>';
    }
  }
}

export default Favorite;
