import Page from './page';
import UrlParser from '../../routes/url-parser';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';
import AppDetail from '../components/app-detail';
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

      const favoriteButton = document.getElementById('favorite');
      await this.checkFavorite(restaurant.id, favoriteButton);
      favoriteButton.addEventListener('click', this.toggleFavorite.bind({
        checkFavorite: this.checkFavorite,
        restaurant,
      }));
    } catch (e) {
      container.innerHTML = '<app-error data-msg="You have no internet connection"></app-error>';
    }

    document.querySelector('footer').style.display = 'block';
  }

  static async toggleFavorite(ev) {
    const exist = await this.checkFavorite(this.restaurant.id, ev.target);

    if (exist) {
      await FavoriteIdb.delete(this.restaurant.id);
    } else {
      await FavoriteIdb.put(this.restaurant);
    }

    this.checkFavorite(this.restaurant.id, ev.target);
  }

  static async checkFavorite(id, button) {
    const exist = await FavoriteIdb.find(id);

    if (exist) {
      // eslint-disable-next-line no-param-reassign
      button.innerText = 'Remove from favorite';
      button.setAttribute('aria-label', 'Remove from favorite');
    } else {
      // eslint-disable-next-line no-param-reassign
      button.innerText = 'Add to favorite';
      button.setAttribute('aria-label', 'Add to favorite');
    }

    return !!exist;
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
