import appListStyle from '../../../styles/components/app-list.scss';
import container from '../../../styles/container.scss';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';

class AppList extends HTMLElement {
  constructor() {
    super();

    this.html = `
        <div class="${container.lg}">
            <h1>Browse All Restaurants</h1>
            <div id="restaurants" class="${appListStyle.wrapper}" tabindex="0"></div>
        </div>
    `;
  }

  static restaurantCard(restaurant) {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const header = document.createElement('header');
    const title = document.createElement('h2');
    const location = document.createElement('span');
    const rating = document.createElement('div');
    const rate = document.createElement('span');
    const body = document.createElement('section');
    const description = document.createElement('p');

    link.href = `/#/restaurant/${restaurant.id}`;
    link.title = `View ${restaurant.name} detail`;

    const { pictureId } = restaurant;
    img.dataset.src = DicodingRestaurant.image(DicodingRestaurant.IMAGE_SMALL, pictureId);
    img.alt = `${restaurant.name} image`;
    img.width = 360;
    img.height = 300;
    img.classList.add('lazyload');

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
  }
}

customElements.define('app-list', AppList);

export default AppList;
