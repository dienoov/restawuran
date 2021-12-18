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
  }
}

export default Restaurant;
