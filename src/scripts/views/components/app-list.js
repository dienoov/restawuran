import appListStyle from '../../../styles/components/app-list.scss';
import container from '../../../styles/container.scss';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';
// import { restaurants } from '../../../DATA.json';

class AppList extends HTMLElement {
  constructor() {
    super();

    // this._restaurants = restaurants.map(AppList.renderCard);

    this.html = `
        <div class="${container.lg}">
            <h2>Browse All Restaurants</h2>
            <div id="restaurants" class="${appListStyle.wrapper}"></div>
        </div>
    `;
  }

  static restaurantCard(restaurant) {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const header = document.createElement('header');
    const title = document.createElement('h3');
    const location = document.createElement('span');
    const rating = document.createElement('div');
    const rate = document.createElement('span');
    const body = document.createElement('section');
    const description = document.createElement('p');

    link.href = '#';
    link.title = `View ${restaurant.name} detail`;

    img.src = DicodingRestaurant.image(DicodingRestaurant.IMAGE_SMALL, restaurant.pictureId);
    img.alt = `${restaurant.name} image`;

    title.innerText = restaurant.name;

    location.classList.add(appListStyle.location);
    location.innerText = restaurant.city;

    rating.classList.add(appListStyle.rating);
    rating.innerText = 'Rating';

    rate.innerText = restaurant.rating;

    description.innerText = restaurant.description;

    rating.append(rate);
    header.append(title, location, rating);
    body.append(description);
    article.append(img, header, body);
    link.append(article);
    return link;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;

    // this.querySelector(`.${appListStyle.wrapper}`).append(...this.restaurants);
  }
}

customElements.define('app-list', AppList);

export default AppList;