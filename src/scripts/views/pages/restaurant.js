import Page from './page';
import UrlParser from '../../routes/url-parser';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';
import AppDetail from '../components/app-detail';

class Restaurant extends Page {
  static async render() {
    return '<app-detail></app-detail>';
  }

  static async created() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurant.detail(url.id);
    const restaurantHTML = AppDetail.restaurantDetail(restaurant);
    document.getElementById('restaurant').innerHTML = restaurantHTML;

    const formReview = document.getElementById('form-review');
    formReview.addEventListener('submit', this.submitReview);
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
