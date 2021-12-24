import Page from './page';
import UrlParser from '../../routes/url-parser';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';
import AppDetail from '../components/app-detail';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteIdb from '../../data/favorite-idb';

class Restaurant extends Page {
  static async render() {
    return '<app-detail></app-detail>';
  }

  static async created() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.getElementById('restaurant');

    try {
      container.innerHTML = '<app-loading></app-loading>';
      const restaurant = await DicodingRestaurant.detail(url.id);
      const restaurantHTML = AppDetail.restaurantDetail(restaurant);
      container.innerHTML = restaurantHTML;

      const formReview = document.getElementById('form-review');
      formReview.addEventListener('submit', this.submitReview);

      const button = new FavoriteButtonPresenter({
        button: document.getElementById('favorite'),
        favoriteRestaurants: FavoriteIdb,
        restaurant,
      });
      await button.render();
    } catch (e) {
      container.innerHTML = '<app-error data-msg="You have no internet connection"></app-error>';
    }

    document.querySelector('footer').style.display = 'block';
  }

  static async submitReview(ev) {
    ev.preventDefault();

    const id = document.getElementById('field-id');
    const name = document.getElementById('field-name');
    const review = document.getElementById('field-review');

    const reviews = await DicodingRestaurant.review({
      id: id.value,
      name: name.value,
      review: review.value,
    });

    document.getElementById('reviews').innerHTML = reviews.reduce(AppDetail.restaurantReview, '');

    name.value = '';
    review.value = '';
  }
}

export default Restaurant;
